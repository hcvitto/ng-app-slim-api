import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'content-presentazione',
  template: `
  	presentazione`,
})
export class PresentazioneComponent implements OnInit {

  @Input() isEditing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
