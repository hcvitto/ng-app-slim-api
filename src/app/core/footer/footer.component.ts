import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	isLogged: boolean;
  screenIsVisible = false;
  navIsVisible = false;
  userNavIsVisible = false;

  constructor(private authService: AuthService) {
  	this.authService.islogged.subscribe(result => this.isLogged = result);
  }

  logout() {
    this.screenIsVisible = false;
    this.userNavIsVisible = false;
  	this.authService.logout();
  }

  showNav(nav: string) {
    this.screenIsVisible = !this.screenIsVisible;
    this.navIsVisible = !this.navIsVisible;
    this.userNavIsVisible = false;
  }

  showUserNav(nav: string) {
    this.screenIsVisible = !this.screenIsVisible;
    this.userNavIsVisible = !this.userNavIsVisible;
    this.navIsVisible = false;
  }

  ngOnInit() {
    this.isLogged = localStorage.getItem('currentUser') ? true : false;
  }

}
