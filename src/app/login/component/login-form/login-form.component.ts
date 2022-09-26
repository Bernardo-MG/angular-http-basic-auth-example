import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginUser } from '@app/login/model/login-user';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent {

  @Input() public loading = false;

  @Input() public error = '';

  @Output() public login = new EventEmitter<LoginUser>();

  public form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public onLogin() {
    if (this.form.valid) {
      this.login.emit(this.form.value);
    }
  }

  public isFormInvalid(field: string): boolean {
    let invalid: boolean;

    if(this.form.invalid) {
      const formField = this.form.get(field);
      if(formField){
        invalid = (formField?.dirty || formField?.touched) && (formField?.errors != null);
      } else {
        invalid = false;
      }
    } else {
      invalid = false;
    }

    return invalid;
  }

  public canLogin(): boolean {
    return this.form.valid;
  }

}
