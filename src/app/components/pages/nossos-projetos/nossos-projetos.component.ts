import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, HostListener, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-nossos-projetos',
  templateUrl: './nossos-projetos.component.html',
  styleUrls: ['./nossos-projetos.component.scss'],

})
export class NossosProjetosComponent implements OnInit {
  
salaryBase: number = 0;
novocampo: number = 0 ;
benefitName: string = ""; // Novo campo para o nome do benefício
benefitValue: number = 0; // Novo campo para o valor do benefício
benefitsList: { name: string, value: number }[] = [];

totalSalary: number = 0;
inss: number = 0;
irrf: number = 0;
netSalary: number = 0;

//BASE PJ

salaryBasePj: number = 0;
novocampoPj: number = 0 ;
benefitNamePj: string = ""; // Novo campo para o nome do benefício
benefitValuePj: number = 0; // Novo campo para o valor do benefício
benefitsListPj: { namePj: string, valuePj: number }[] = [];

  totalSalaryPj: number = 0;
  inssPj: number = 0;
  irpj: number = 0;
  csll: number = 0;
  pis: number = 0;
  confins: number = 0;
  netSalaryPj: number = 0;
  



    constructor() { }

    ngOnInit(): void {
    this.calculateSalary();
    this.calculateSalaryPj();
    }

    calculateSalary(): void {
      // Somar salário base, novocampo e benefícios
      this.totalSalary = this.salaryBase + this.novocampo + this.calculateTotalBenefits();
    
      this.calculateINSS();
      this.calculateIRRF();
    
      this.netSalary = this.totalSalary - this.inss - this.irrf;
    }
    
    calculateTotalBenefits(): number {
      // Somar os valores dos benefícios
      return this.benefitsList.reduce((total, benefit) => total + benefit.value, 0);
    }
   
  
    calculateINSS(): void {
      const inssPercentages = [0.08, 0.09, 0.11, 0.11, 0.11]; // Tabela INSS 2024
      const inssBase = this.totalSalary;
  
      if (inssBase <= 1100) {
        this.inss = inssBase * inssPercentages[0];
      } else if (inssBase <= 2203.48) {
        this.inss = inssBase * inssPercentages[1];
      } else if (inssBase <= 3305.22) {
        this.inss = inssBase * inssPercentages[2];
      } else if (inssBase <= 6433.57) {
        this.inss = inssBase * inssPercentages[3];
      } else {
        this.inss = inssBase * inssPercentages[4];
      }
    }
  
    calculateIRRF(): void {
      const irrfPercentages = [0, 0.075, 0.15, 0.225, 0.275]; // Tabela IRRF 2024
      const irrfDeductions = [0, 142.8, 354.8, 636.13, 869.36];
  
      let irrfBase = this.totalSalary - this.inss;
      let accumulatedTax = 0;
  
      for (let i = irrfPercentages.length - 1; i >= 0; i--) {
        if (irrfBase > 0) {
          const range = irrfBase - irrfDeductions[i];
          const taxable = range > 0 ? range : 0;
          accumulatedTax += taxable * irrfPercentages[i];
          irrfBase -= range;
        }
      }
  
      this.irrf = accumulatedTax;
    }


    addBenefit(): void {
      if (this.benefitName && this.benefitValue) {
        this.benefitsList.push({ name: this.benefitName, value: this.benefitValue });
        this.clearBenefitFieldsPj();
      }
    }
  
    clearBenefitFields(): void {
      this.benefitName = "";
      this.benefitValue = 0;
    }
    
    //-------------------------
    //Campo de Pj
  
    calculateSalaryPj(): void {
      // Somar salário base, novocampo e benefícios
      this.totalSalaryPj = this.salaryBasePj + this.novocampoPj + this.calculateTotalBenefitsPj();
    
      this.calculateIRPJ();
      this.calculateCSLL();
      this.calculatePis();
      this.calculateCONFINS();
      this.calculateINSSPj();
    
      this.netSalaryPj = this.totalSalaryPj - this.inssPj - this.irpj - this.csll - this.pis - this.confins - this.confins;
    }
    
    calculateTotalBenefitsPj(): number {
      // Somar os valores dos benefícios
      return this.benefitsListPj.reduce((total, benefitPj) => total + benefitPj.valuePj, 0);
    }
   
  
    calculateINSSPj(): void {
      const inssPercentages = [0.08, 0.09, 0.11, 0.11, 0.11]; // Tabela INSS 2024
      const inssBase = this.totalSalaryPj;
  
      if (inssBase <= 1100) {
        this.inssPj = inssBase * inssPercentages[0];
      } else if (inssBase <= 2203.48) {
        this.inssPj = inssBase * inssPercentages[1];
      } else if (inssBase <= 3305.22) {
        this.inssPj = inssBase * inssPercentages[2];
      } else if (inssBase <= 6433.57) {
        this.inssPj = inssBase * inssPercentages[3];
      } else {
        this.inssPj = inssBase * inssPercentages[4];
      }
    }
  
    calculateIRPJ(): void {
      const irpjAlquotas = [0.025, 0.15]; // 2,5% até R$ 20.000,00 e 15% acima de R$ 20.000,00
      const faixaLimiteIRPJ = 20000;

      if (this.totalSalaryPj <= faixaLimiteIRPJ) {
          this.irpj = this.totalSalaryPj * irpjAlquotas[0];
      } else {
          this.irpj = this.totalSalaryPj * irpjAlquotas[1];
      } 
    }

    calculateCSLL(): void {
      const csllAlquotas = [0.15, 0.3]; // 15% até R$ 20.000,00 e 30% acima de R$ 20.000,00
        const faixaLimiteCSLL = 20000;

        if (this.totalSalaryPj <= faixaLimiteCSLL) {
            this.csll = this.totalSalaryPj * csllAlquotas[0];
        } else {
            this.csll = this.totalSalaryPj * csllAlquotas[1];
        } 
    }

    calculatePis(): void {
      const pisAlquota = 0.0186; // 1,86%
      this.pis = this.totalSalaryPj * pisAlquota;
    }

    calculateCONFINS() {
      const cofinsAlquota = 0.076; // 7,6%
        this.confins = this.totalSalaryPj * cofinsAlquota;
    }



    addBenefitPj(): void {
      if (this.benefitNamePj && this.benefitValuePj) {
        this.benefitsListPj.push({ namePj: this.benefitNamePj, valuePj: this.benefitValuePj });
        this.clearBenefitFieldsPj();
      }
    }
  
    clearBenefitFieldsPj(): void {
      this.benefitNamePj = "";
      this.benefitValuePj = 0;
    }
  }  
  
