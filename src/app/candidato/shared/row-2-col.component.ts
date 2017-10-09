import { Component, Input } from '@angular/core';

@Component({
	selector: 'row-2-col',
  template: `
  <dl class="row">
		<dt class="col-md-2">{{ label }}</dt>
		<dd class="col-md-10">{{ data }}</dd>
	</dl>
	`,
})

export class Row2Col {

	@Input() label: string;
	@Input() data: string;

  constructor() { }

}
