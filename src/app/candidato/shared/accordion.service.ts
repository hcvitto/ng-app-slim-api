import { Injectable } from '@angular/core';

@Injectable()
export class AccordionService {


	panelsDefault: any = {
	  openPanels: [ false, false ],
		editingPanels: [ false, false ],
		panelsConfig: [
	    {
	      editable: true,
	      icon: 'font',
	      title: 'Dati anagrafici',
	      comp: 'anagrafica'
	    },
	    {
	      icon: 'microphone',
	      title: 'Presentazione',
	      comp: 'presentazione'
	    }
	  ]
	};

  getPanelsDefault() {
  		return this.panelsDefault;
  }

  openPanel(id: number): void {
  	this.panelsDefault.openPanels[id] = !this.panelsDefault.openPanels[id];
  }

  toggleEdit(id: number): void {
    this.panelsDefault.editingPanels[id] = true;
    this.panelsDefault.openPanels[id] = true;
  }

  openEdit(id: number): void {
    this.panelsDefault.editingPanels[id] = true;
  	if (!this.panelsDefault.openPanels[id]) {
  		this.panelsDefault.openPanels[id] = true;
  	}
  }

  closeEdit(id: number): void {
    this.panelsDefault.editingPanels[id] = false;
  }

}
