import { 
  Component, 
  OnInit,
  ElementRef, 
  ViewChild } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { enter } from '../_animations/page.animation';

interface Artigiano {
	id: number,
	nome: string,
	cognome: string,
	shop: string,
	coord: any,
	descrizione: string,
	attivita: string[],
	email: string,
	indirizzo: string,
	website: string,
	mainPic: string,
	gallery: string[],
	social: any[],
}

@Component({
  selector: 'app-scheda',
  templateUrl: './scheda.component.html',
  styleUrls: ['./scheda.component.css'],
  animations: [enter]
})
export class SchedaComponent implements OnInit {

  @ViewChild('mappa') mappa;
  @ViewChild('infoWindow') infoWindow;

	showMap: boolean = false;
	activeTab: string = 'tab1';
	showForm: boolean = false;

	data = {
		'id': 1,
		'nome': 'Villorio',
		'cognome': 'Baiunnari',
		'shop': 'La schiscetta di Mimì',
		'coord': {
      'lat': 45.500252,
      'lon': 9.167744,
		},
		'descrizione': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		'attivita': [
			'Ceramica', 'Vetro', 'Legno'
		],
		'email': 'email@email.it',
		'indirizzo': 'via indirizzo 14',
		'website': 'http://www.google.it',
		'mainPic': 'https://catracalivre.com.br/wp-content/uploads/2015/08/centro_de_cultura_ceramica.jpg',
		'gallery': [
			'https://static.fanpage.it/wp-content/uploads/sites/18/2016/02/artigianato-638x425.jpg',
			'http://newsgo.it/wp-content/uploads/2017/07/Artigianato-696x466.jpg',
			'http://www.movimentolibertario.com/wp-content/uploads/2012/07/artigiano-300x224.jpg',
			'http://www.nicolazingaretti.it/wp-content/uploads/2015/02/cosa-faccio-artigianato-678x451.jpg',
			'http://i1.wp.com/megadeluxe.com/wp-content/uploads/2012/03/italiaveloce-magnifica-08.jpg?w=965',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tibetan_Carpet_Factory_of_Ravangla%2C_Sikkim.jpg/795px-Tibetan_Carpet_Factory_of_Ravangla%2C_Sikkim.jpg',
			'http://blog.unahotels.it/wp-content/uploads/2015/04/Mostra-Artigianato-Firenze-e1429517813838-670x448.jpg',
			'https://catracalivre.com.br/wp-content/uploads/2015/08/centro_de_cultura_ceramica.jpg',
		],
		'social': [
      { 'nome': 'twitter', 'url': 'url' },
      { 'nome': 'facebook', 'url': 'url' }
    ],
	}

  constructor() { }

  toggleMap() {
  	this.showMap = !this.showMap;
  	if (this.showMap) {
	  	this.mappa.triggerResize();
	  	this.showForm = false;
	  }
  }

  toggleForm() {
  	this.showForm = !this.showForm;
  }

  activateTab(tab) {
  	this.activeTab = tab;
  }

  ngOnInit() {
  }

}
