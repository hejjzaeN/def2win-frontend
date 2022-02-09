import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'; 

import { backendURL } from 'src/app/backend.const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private handleError(error: HttpErrorResponse) {
    let errMsg;
    if (error.status === 0) {
      errMsg = `Network error occurred. ${error.error}`
    } else {
      errMsg = `${error.error?.message}`
    }
    return throwError(errMsg);
  }

  constructor(private http: HttpClient) { }

  register (user: any) {
    return this.http.post(`${backendURL}/auth/register`, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  login (user: any) {
    return this.http.post(`${backendURL}/auth/login`, user)
      .pipe(
        catchError(this.handleError)
      )
  }
}
