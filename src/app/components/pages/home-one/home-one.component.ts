import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home-one',
    templateUrl: './home-one.component.html',
    styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    teamSlides: OwlOptions = {
		loop: true,
        margin: 20,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    }
    clientWrap: OwlOptions = {
		loop:true,
		margin:30,
		nav:false,
		mouseDrag: true,
		items:1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 800,
		autoplayHoverPause: true,
		center: false,
		responsive:{
			0:{
				items:1,
				margin: 10,
			},
			576:{
				items:1,
			},
			768:{
				items:2,
				margin: 20,
			},
			992:{
				items:2,
			},
			1200:{
				items:2,
			}
		}
    }

    // Accordion
    accordionItems = [
        {
            title: 'Grande Compreensão',
            content: `Na Code Express, nossa busca pela excelência é impulsionada por uma qualidade distintiva: a Grande Compreensão. Compreendemos profundamente que cada projeto é único, assim como as metas e desafios exclusivos de cada cliente. `,
            open: false
        },
        {
            title: 'Equipe Experiente',
            content: `Nossa equipe é formada por profissionais altamente qualificados e experientes que trazem consigo uma riqueza de conhecimento e perícia no universo em constante evolução da Tecnologia da Informação.`,
            open: false
        },
        {
            title: 'Serviço de Melhor Qualidade',
            content: `comprometemo-nos inabalavelmente a oferecer um "Serviço de Melhor Qualidade" em todas as interações e entregas. Esta qualidade é o pilar central que define nossa reputação e impulsiona nosso compromisso com a satisfação do cliente.`,
            open: false
        },
        {
            title: 'Atualizar Tecnologia',
            content: `A qualidade de "Atualizar Tecnologia" é um princípio fundamental que define a abordagem da Code Express em meio ao cenário dinâmico da Tecnologia da Informação. Reconhecemos que a evolução constante das tecnologias é essencial para impulsionar o sucesso e a relevância a longo prazo.`,
            open: false
        },
    ];
    selectedItem : any = null;
    toggleAccordionItem(item:any) {
        item.open = !item.open;
        if (this.selectedItem && this.selectedItem !== item) {
            this.selectedItem.open = false;
        }
        this.selectedItem = item;
    }

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}
