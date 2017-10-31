import { Injectable } from '@angular/core';
//import { Store } from '@ngrx/store';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CURRENT_USER } from '../app.actions';

import * as myGlobals from "../shared/globals";

interface AppStore {
  currentUser: any;
}


@Injectable()
export class UserService {

  currentUser: Observable<any>;

  //constructor(private http: Http, private store: Store<AppStore>) {
  constructor(private http: Http) {
    //this.currentUser = store.select('currentUser'); // Bind an observable of current user to "UserService"
  }

  user: any = {} // used in components, until store is used

  getUserData(id: number): Observable<any> {
    // TODO: user store
    // check if there is a current user in store to get his data
    // if true return data from store

    return this.currentUser
      .map(user => {
        return user;
      });

    // else return data from server
    /*
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + currentUser.token);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(myGlobals.API_URL + 'user/' + id, options)
      .map((response: Response) => {
        // TODO : check response
        // update store with current user from server
        this.store.dispatch({ type: CURRENT_USER, payload: response.json().data });
        return response.json().data;
      });
    */
  }

  updateUser(user) {
  	this.user = user;
  }

}
