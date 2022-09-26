import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/authentication/service/authentication.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  public form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  public loading = false;

  public submitted = false;

  public error = '';

  private returnUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
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

  public onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.valid) {
      this.loading = true;
      this.authenticationService.login(this.form.value.username, this.form.value.password)
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

  public isFormInvalid(): boolean {
    return this.form.invalid && (this.form.dirty || this.form.touched);
  }

  public canLogin(): boolean {
    return this.form.valid;
  }

}
