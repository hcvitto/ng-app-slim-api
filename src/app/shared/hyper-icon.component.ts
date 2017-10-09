import { Component, Input } from '@angular/core';

@Component({
	selector: 'hyper-icon',
  template: `<i class="fa fa-{{ icon }} {{ classe }}"></i>`,
})

export class HyperIconComponent {

	@Input() icon: string;
	@Input() classe: string;

  constructor() { }

}
