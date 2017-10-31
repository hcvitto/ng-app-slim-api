import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as myGlobals from "../shared/globals";


@Injectable()
export class EmailCheckService {

  constructor(private http: Http) {
  }

  check(email: string): Observable<boolean> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(myGlobals.API_URL + 'email-check', options)
      .map((response: Response) => {
        console.log(response); 
        // TODO : check response
        // update store with current user from server
        return response.json().data;
      });

  }

}
