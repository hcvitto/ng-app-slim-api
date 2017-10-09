import { Component, Input, OnInit, OnDestroy,
          ViewChild, ViewContainerRef, 
          ComponentFactoryResolver, ComponentRef
 } from '@angular/core';

import { AnagraficaComponent } from './cv-sections/anagrafica.component';
import { PresentazioneComponent } from './cv-sections/presentazione.component';

@Component({
	selector: 'dynamic-content',
  template: `
    <div>
      <div #container></div>
    </div>
  `
})

// ---
// A WAY TO CREATE COMPONENTS DYNAMICALLY, BUT THEY MUST ALREADY EXISTS IN THE APP
// ---

export class DynamicContentComponent implements OnInit, OnDestroy {

	@ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef; // reference to child component '#container' + api to create component (v. createComponent())

  @Input() type: string;

  @Input() context: any;

  private mappings = { // ng can't use string to create component
    anagrafica: AnagraficaComponent,
    presentazione: PresentazioneComponent
  };

  private componentRef: ComponentRef<{}>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  getComponentType(typeName: string) {
    let type = this.mappings[typeName];
    return type;
  }

  ngOnInit() {
    if (this.type) {
      // this.container.clear(); ?? needed to remove previous view ??

      let componentType = this.getComponentType(this.type);
      
      // note: componentType must be declared within module.entryComponents
      let factory = this.componentFactoryResolver.resolveComponentFactory(componentType); // takes a component and returns a ComponentFactory, 'an object that knows how to create a component'
      this.componentRef = this.container.createComponent(factory); // createComponent will call internally factory.create which will append the component as a sibling to container

      // set component context
      let instance = <DynamicComponent> this.componentRef.instance;
      instance.context = this.context;

    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}

export abstract class DynamicComponent {
    context: any; // !! better to define type
}
