import { 
  Component, 
  Input, 
  ViewEncapsulation 
} from '@angular/core';

import { AccordionService } from './shared/accordion.service';

import { HyperIconComponent } from '../shared/hyper-icon.component';

import { HyperAccordionPanelHeadComponent } from './hyper-accordion-panel-head.component';
//import { HyperAccordionPanelContentComponent } from './hyper-accordion-panel-content.component';

@Component({
	selector: 'hyper-accordion',
  templateUrl: './hyper-accordion.component.html',
  styleUrls: ['./hyper-accordion.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class HyperAccordionComponent {

  panelsConfig: any[]; // panels content definitions

  openPanels: boolean[]; // array of open panels

  editingPanels: boolean[]; // array of panels in editing mode

	@Input() classe: string = null;
	@Input() panels: any[];

  context: any = { // context for dynamically created components
    editingPanels: []
  }

  constructor(private accordionService:AccordionService) {
    let panelsDefault = this.accordionService.getPanelsDefault();
    this.panelsConfig = panelsDefault.panelsConfig;
    this.openPanels = panelsDefault.openPanels;
    this.editingPanels = panelsDefault.editingPanels;
    this.context.editingPanels = this.editingPanels;
  }


}
