import { Component, OnInit } from '@angular/core';

import { UserService } from '../../core/user.service';

@Component({
	selector: 'content-anagrafica',
  templateUrl: 'anagrafica.component.html',
})
export class AnagraficaComponent implements OnInit {

	userData: any;

  constructor(private userService:UserService) {
  }

  ngOnInit() {
  	this.userData = this.userService.getUserData(1)
  	  .subscribe(result => {
        this.userData = result;
      });

  }

}
