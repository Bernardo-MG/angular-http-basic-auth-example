import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationModule } from '@app/authentication/authentication.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './service/login.service';
import { LogoutButtonComponent } from './logout-button/logout-button.component';



@NgModule({
  declarations: [
    LoginFormComponent,
    LogoutButtonComponent
  ],
  imports: [
    LoginRoutingModule,
    AuthenticationModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService
  ],
  exports: [
    LogoutButtonComponent
  ]
})
export class LoginModule { }
