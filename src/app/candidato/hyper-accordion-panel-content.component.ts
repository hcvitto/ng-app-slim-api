import { Component, Input } from '@angular/core';

@Component({
	selector: 'hyper-accordion-panel-content',
  template: `<div class="hyper-accordion-panel-content">{{ content }}</div>`,
})

export class HyperAccordionPanelContentComponent {

	@Input() content: string;

  constructor() { }

}
