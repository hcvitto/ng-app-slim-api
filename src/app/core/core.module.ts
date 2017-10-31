import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'; // ?? can be deleted: is already imported by BrowserModule in AppModule
import { RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule
  ],
  schemas: 
    [ NO_ERRORS_SCHEMA ],
  declarations: [
  	HeaderComponent, 
  	FooterComponent,
  ],
  exports: [
  	HeaderComponent,
  	FooterComponent
  ]
})
export class CoreModule { }
