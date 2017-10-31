import { 
  Component, 
  OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ArtigianiService } from '../shared/artigiani.service';

import { enter } from '../_animations/page.animation';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  animations: [
    enter,
  ]
})
export class ListaComponent implements OnInit {

  data: any[];
  errorMsg: string;
	activeEl: string = null;

  landed: boolean = false;

  constructor(private artigianiService:ArtigianiService) { }

  setActive(el: string) {
  	this.activeEl = (this.activeEl === el) ? null : el;
  }

  ngOnInit() {
    this.artigianiService.getAll()
      .subscribe(data => {
        if (data.error === 0) {
          this.data = data.data;
        } else {
          this.errorMsg = data.msg;
        }
      },
      err => {
        this.errorMsg = err;
      });
  }

}
