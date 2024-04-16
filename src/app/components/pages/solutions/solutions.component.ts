import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  showDesenvolvimentoText: boolean = false;
	showManutencaoText: boolean = false;
	showSitesText: boolean = false;
	showLogoText: boolean = false;

	
  toggleText(item: string) {
    this.showDesenvolvimentoText = item === 'desenvolvimento' && !this.showDesenvolvimentoText;
    this.showManutencaoText = item === 'manutencao' && !this.showManutencaoText;
    this.showSitesText = item === 'sites' && !this.showSitesText;
    this.showLogoText = item === 'logo' && !this.showLogoText;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
