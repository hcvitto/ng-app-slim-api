import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // ?? can be deleted: is already imported by BrowserModule in AppModule
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
  	HeaderComponent, 
  	FooterComponent
  ],
  exports: [
  	HeaderComponent,
  	FooterComponent
  ]
})
export class CoreModule { }
