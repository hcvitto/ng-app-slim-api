import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import * as myGlobals from "../shared/globals";

interface Bottega {
  id: number,
  nome: string,
  lat: number,
  lon: number,
  img: string,
  attivita: string[],
  website: string,
  social: any[],
}


@Injectable()
export class ArtigianiService {

  /*
  pins: Bottega[] = [
    {
      id: 1,
      nome: 'Villorio Baiunnari',
      lat: 45.500252,
      lon: 9.167744,
      img: 'https://catracalivre.com.br/wp-content/uploads/2015/08/centro_de_cultura_ceramica.jpg',
      attivita: [
        'Ceramica', 'Vetro', 'Legno'
      ],
      website: 'https://www.buystyle.it/appendiabiti-shabby-chic-14',
    },
    {
      id: 2,
      nome: 'Gertrude Stein',
      lat: 45.501252,
      lon: 9.168744,
      img: 'http://static.guide.supereva.it/guide/fisco_contabilita/artigiano.jpg',
      attivita: [
        'Fotografia', 'Disegno'
      ],
      website: 'https://www.buystyle.it/appendiabiti-shabby-chic-14',
    },
  ];
  */
 
  constructor(private http: Http) {
  }

  /*getAll(): any[] {

    return this.pins;

  }*/


  getAll(): Observable<any> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(myGlobals.API_URL + 'artigiani', options)
      .map((response: Response) => {
        // TODO : check response
        // TODO : update store with artigiani list
        return response.json();
      })
      .catch((err) => {
        return Observable.throw('Errore di connessione');
        //return Observable.throw(err);
      });

  }

}
