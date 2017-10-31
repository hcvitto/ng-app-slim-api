import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLinkActive, Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	isLogged: boolean;
  screenIsVisible = false;
  navIsVisible = false;
  showHeader: boolean;
  sub;

  constructor(
    private authService: AuthService, 
    private router:Router, 
    private route:ActivatedRoute
  ) {
  	this.authService.islogged.subscribe(result => this.isLogged = result);
    router.events
      .filter(e => e instanceof NavigationEnd)
      .forEach(e => {
        this.showHeader = route.root.firstChild.snapshot.data.showHeader;
        console.log(route.root.firstChild.snapshot.data.showHeader);
    });
  }

  logout() {
    this.screenIsVisible = false;
    this.navIsVisible = false;
  	this.authService.logout();
  }

  showNav(nav: string) {
    this.screenIsVisible = !this.screenIsVisible;
    if (nav) {
      this[nav] = !this[nav];
    } else {
      this.navIsVisible = false;
    }
  }

  hideNav() {
    this.screenIsVisible = false;
    this.navIsVisible = false;
  }

  ngOnInit() {
    this.isLogged = localStorage.getItem('currentUser') ? true : false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
