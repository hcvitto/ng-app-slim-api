import { Component } from '@angular/core';
import { UserService } from './core/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	title: string;

	constructor(private userService: UserService) {
 		this.title = userService.user.name;
	}

}
