import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/authentication/service/authentication.service';
import { LoginUser } from '@app/login/model/login-user';

@Component({
  selector: 'login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.sass']
})
export class LoginViewComponent implements OnInit {

  private returnUrl: string = '';

  public loading = false;

  public error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    // redirect to home if already logged in
    if (this.authenticationService.getUser().logged) {
      this.router.navigate(['/']);
    }
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public onLogin(login: LoginUser) {
    this.authenticationService.login(login.username, login.password)
      .subscribe({
        next: user => {
          this.loading = false;
          if (user.logged) {
            this.router.navigate([this.returnUrl]);
          }
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
  }

}