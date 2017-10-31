import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/share";
import 'rxjs/add/operator/catch';

import * as myGlobals from "../shared/globals";

@Injectable()
export class AuthService {
    
  public islogged: Observable<boolean>;
  private observer: Observer<boolean>;

  public token: string;

  constructor(private http: Http, private router: Router) {
    this.islogged = new Observable(observer => 
      this.observer = observer
    ).share();

    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  changeState(newState: boolean) {
    if (this.observer !== undefined) {
      this.observer.next(newState);
    }
  }

  signup(email: string, password: string): Observable<any> {
    let payload = JSON.stringify({ email: email, password: password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(myGlobals.API_URL + 'signup', payload, options)
      .map((response: Response) => response.json())
      /*.catch((error:any) => Observable.throw(error.json().error || 'Server error'))*/;

  }

  login(email: string, password: string): Observable<any> {

    let payload = JSON.stringify({ email: email, password: password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    var p;

    return this.http.post(myGlobals.API_URL + 'signin', payload, options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().jwt;
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));

          this.changeState(true);

          p = {
            error: false,
            msg: 'Login succesfull',
            data: {
              name: 'Vitto',
              surname: 'Pitto',
              activity: 'webbb'
            }
          }
          // return true to indicate successful login
          //return p;
          //return true;
        } else {
          p = {
            error: true,
            msg: 'Wrong data'
          }
          // return false to indicate failed login
          //return false;
        }
        return p;
      });

  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.changeState(false);
    this.token = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/signin']);
  }
  
}
