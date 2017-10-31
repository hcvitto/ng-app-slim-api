//import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AgmCoreModule } from '@agm/core';

import { ArtigianiService } from '../shared/artigiani.service';

import { enter } from '../_animations/page.animation';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css'],
  animations: [
    enter
  ]
})
export class MappaComponent implements OnInit {

  // per geolocalizzazione dell'utente
  // lat: number;
  // lng: number;

  // per ricentrare al resize
  //@ViewChild('mappa') mappa;

  centerMap = {
    lat: 45.500252,
    lon: 9.167744
  }

  data: any[];
  errorMsg: string;

  // per geolocalizzazione dell'utente
  //setPosition(pos) {
  //  this.lat = pos.coords.latitude;
  //  this.lng = pos.coords.longitude;
  //}

  constructor(private artigianiService:ArtigianiService) {
  }
  /*
  constructor(ngZone:NgZone) {
    TODO: ricentrare al resize
    window.onresize = (e) =>
    {
      this.mappa.triggerResize();
      ngZone.run(() => {
        this.mappa.triggerResize();
      });
    };
  }
  */

  ngOnInit() {
    this.artigianiService.getAll().subscribe(data => {
      if (data.error === 0) {
        this.data = data.data;
      } else {
        this.errorMsg = data.msg;
      }
    },
    err => {
      this.errorMsg = err;
    });
    // per geolocalizzazione dell'utente
    //if(navigator.geolocation){
    //  navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    //}
  }

}
