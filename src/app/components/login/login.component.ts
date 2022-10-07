import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _loginService: LoginService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
  retUrl: string = '';
  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe((map) => {
      let url = map.get('returnUrl');
      if (url) this.retUrl = url;
    });
  }

  onSubmit = (userForm: NgForm) => {
    console.log(userForm.value);
    let user = userForm.value;
    this._loginService.loginUser(user.username, user.password).subscribe({
      next: (data: boolean) => {
        // if this is false he is an invalid user , so take him to homepage
        if (!data) this._router.navigate(['home']);
        // if return url is not null take him to the return url route
        else if (data && this.retUrl != '')
          this._router.navigate([this.retUrl]);
        else this._router.navigate(['home']);
      },
    });
  };
}
