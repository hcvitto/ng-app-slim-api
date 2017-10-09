import { Component, Input } from '@angular/core';

import { AccordionService } from './shared/accordion.service';

@Component({
	selector: 'hyper-accordion-panel-head',
  templateUrl: 'hyper-accordion-panel-head.component.html',
})

export class HyperAccordionPanelHeadComponent {

	@Input() id: number;
	@Input() editable: boolean;
	@Input() icon: string;
	@Input() title: string;

  constructor(private accordionService:AccordionService) {

  }

  togglePanel(id: number) {
  	this.accordionService.openPanel(id);
  }
  
  openEditing(id: number) {
  	this.accordionService.openEdit(id);
  }

}
