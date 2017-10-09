import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HyperIconComponent } from './hyper-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	HyperIconComponent
  ],
  exports: [
  	HyperIconComponent
  ]
})
export class SharedModule { }
