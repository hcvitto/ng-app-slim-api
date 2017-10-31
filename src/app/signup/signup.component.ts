import { 
  Component, 
  OnInit,
  OnDestroy,
  trigger, 
  style, 
  transition, 
  animate } from '@angular/core';

import { AuthService } from '../core/auth.service';

import { enter } from '../_animations/page.animation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
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
export class SignupComponent implements OnInit {

	model: any = {};

  submitted:boolean;
  hasError:boolean;
	showPassord:boolean = false;
  responseMsg: string;

  signupSubscription; 

  constructor(private authService: AuthService) { }

  showPassword(e) {
    this.showPassord = e.currentTarget.checked;
  }

  signup() {
		this.signupSubscription = this.authService.signup(this.model.email, this.model.password)
      .subscribe(
        response => {
          this.submitted = true;
          this.responseMsg = response.msg;
          if (response.error === 0) {
            this.hasError = false;
          } else {
            this.hasError = true;
          }
        }, 
        err => {
          this.responseMsg = err;
          this.submitted = true;
          this.hasError = true;
        });
    return true;
 }

  ngOnInit() {
  }

  ngOnDestroy() {
    if(this.signupSubscription){
      this.signupSubscription.unsubscribe();
    }
  }

}
