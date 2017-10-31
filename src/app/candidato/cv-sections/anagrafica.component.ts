import { Component, OnInit } from '@angular/core';

import { UserService } from '../../core/user.service';

interface AppStore {
  currentUser: any;
}

@Component({
	selector: 'content-anagrafica',
  templateUrl: 'anagrafica.component.html',
})
export class AnagraficaComponent implements OnInit {

	userData: any = {};

  constructor(private userService:UserService) {
  }

  setPosition(pos) {
    console.log(pos);
  }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    }

    this.userService.getUserData(1)
      .subscribe(
        result => this.userData = result,
        err => console.log(`Errore in AnagraficaComponent:  ${err.message}`)
      );
  }

}
