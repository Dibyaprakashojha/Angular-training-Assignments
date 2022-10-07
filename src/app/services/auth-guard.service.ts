import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private _loginService: LoginService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // check if the user is logged in
    // if user is not route him to another url
    if (this._loginService.isUserLoggedIn()) {
      // i.e. isUserLoggedIn = false
      console.log(`Hello`);
      return true;
    } else {
      alert('please login');
      // localhost:8080/login?returnUrl=book
      this._router.navigate(['login'], {
        queryParams: { returnUrl: route.url },
      });
      return false;
    }
  }
}
