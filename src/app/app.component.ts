//import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';

import { UserService } from './core/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	//@ViewChild('content') contentView: ElementRef;
	//contentHeight: number;

	title: string;

	//constructor(private userService: UserService, ngZone:NgZone) {
	constructor(
		private userService: UserService
	) {
 		this.title = userService.user.name;
 		/*window.onresize = (e) =>
    {
        ngZone.run(() => {
            this.contentHeight = window.innerHeight - 50;
        });
    };*/
	}

}
