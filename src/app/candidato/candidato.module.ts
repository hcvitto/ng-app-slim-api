import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import app services
import { AccordionService } from './shared/accordion.service';

// import app modules
import { SharedModule } from '../shared/shared.module';
import { SharedModule as CvSharedModule } from './shared/shared.module';

// import app components
import { CandidatoComponent } from './candidato.component';
import { CvComponent } from './cv.component';
import { HyperAccordionComponent } from './hyper-accordion.component';
import { HyperAccordionPanelHeadComponent } from './hyper-accordion-panel-head.component';
import { HyperAccordionPanelContentComponent } from './hyper-accordion-panel-content.component';
// import cv parts app components
import { DynamicContentComponent } from './dynamic-content.component';
import { AnagraficaComponent } from './cv-sections/anagrafica.component';
import { AnagraficaFormComponent } from './cv-sections/anagrafica-form.component';
import { PresentazioneComponent } from './cv-sections/presentazione.component';


@NgModule({
  imports: [
  	CommonModule,
    SharedModule,
    CvSharedModule,
  ],
  declarations: [
  DynamicContentComponent, 
  	CandidatoComponent,
  	CvComponent,
  	HyperAccordionComponent,
    HyperAccordionPanelHeadComponent,
    HyperAccordionPanelContentComponent,

    AnagraficaComponent,
    AnagraficaFormComponent,
    PresentazioneComponent,
  ],
  entryComponents: [
    AnagraficaComponent,
    PresentazioneComponent
  ],
  exports: [
  	CandidatoComponent,
  ],
  providers: [
      AccordionService
  ]
})
export class CandidatoModule { }
