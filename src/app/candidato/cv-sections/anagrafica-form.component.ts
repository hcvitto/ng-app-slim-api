import { Component, OnInit } from '@angular/core';

import { AccordionService } from '../shared/accordion.service';
import { UserService } from '../../core/user.service';

@Component({
	selector: 'form-anagrafica',
  templateUrl: 'anagrafica-form.component.html',
})
export class AnagraficaFormComponent implements OnInit {

	userData: any;

  constructor(
  	private accordionService:AccordionService,
  	private userService:UserService
  ) {
  	this.userData = userService.user;
  }

  closeForm() {
  	this.accordionService.closeEdit(0);
  }

  ngOnInit() {
  }

}
