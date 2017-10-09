import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service'; // user service

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	model: any = {};
  loading: boolean = false;
  hasError: boolean;

  constructor(
  	private authService: AuthService,
  	private router:Router
  ) { }

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
            this.router.navigate(['/candidato']);
        } else {
            this.hasError = true;
            this.loading = null;
        }
      });
  }

}

