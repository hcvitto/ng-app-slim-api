import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Row2Col } from './row-2-col.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	Row2Col
  ],
  exports: [
  	Row2Col
  ]
})
export class SharedModule { }
