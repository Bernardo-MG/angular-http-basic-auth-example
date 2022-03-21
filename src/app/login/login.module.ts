import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationModule } from '@app/authentication/authentication.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './service/login.service';



@NgModule({
  declarations: [
    LoginFormComponent
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
  ]
})
export class LoginModule { }
