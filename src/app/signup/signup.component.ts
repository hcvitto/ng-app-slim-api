import { Component, OnInit } from '@angular/core';

import { UserService } from '../core/user.service'; // user service

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	model: any = {};

	submitted:boolean;

  constructor(private userService: UserService) { }

  register() {
		this.userService.updateUser(this.model);
		this.submitted = true;
		return true;
  }

  ngOnInit() {
  }

}
