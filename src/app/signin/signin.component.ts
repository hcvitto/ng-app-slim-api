import { 
  Component, 
  OnInit, 
  trigger, 
  state, 
  style, 
  transition, 
  animate, 
  keyframes } from '@angular/core';
import { Router } from '@angular/router';
//import { Store } from '@ngrx/store';

//import { CURRENT_USER } from '../app.actions';

import { AuthService } from '../core/auth.service'; // user service

import { enter } from '../_animations/page.animation';

interface AppStore {
  currentUser: any;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [
    enter, 
    trigger('formUp',
      [
        transition(':enter',
          [
            style({transform: 'scale(.9)', opacity: 0}),
            animate('200ms ease-in-out')
          ]
        )
      ]
    )
  ]
})
export class SigninComponent implements OnInit {

	model: any = {};
  loading: boolean;
  hasError: boolean;

  constructor(
  	private authService: AuthService,
  	private router:Router,
    //private store: Store<AppStore>
  ) { }

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.email, this.model.password)
      .subscribe(result => {
        if (result.error === false) {
          //this.store.dispatch({ type: CURRENT_USER, payload: result.data });
          this.router.navigate(['/']);
        } else {
          this.hasError = true;
          this.loading = null;
        }
      });
  }

}

