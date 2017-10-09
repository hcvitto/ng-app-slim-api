import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  fakeLoginCredentials: any = {
    username: 'vitto',
    password: 'vitto',
  }

  user: any = {}

  getUserData(id: number): Observable<boolean> {
    // TODO: get data from server with JWT
    let url = 'http://localhost/artigiani/api/public/user/' + id;
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + currentUser.token);

    let options = new RequestOptions({ headers: headers });


    return this.http.get(url, options)
      .map((response: Response) => {
        // TODO : check response
        return response.json().data;
      });
  }

  updateUser(user) {
  	//this.user = user;
  }

}
