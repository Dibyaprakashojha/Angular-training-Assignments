import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn!: boolean;
  constructor() {
    this.isLoggedIn = false;
  }

  isUserLoggedIn = () => {
    // false
    return this.isLoggedIn;
  };

  loginUser = (username: string, password: string): Observable<boolean> => {
    if (username == 'dibya' && password == '123') {
      this.isLoggedIn = true;
      return of(this.isLoggedIn); //if this is true then
    } else return of(false);
  };
}
