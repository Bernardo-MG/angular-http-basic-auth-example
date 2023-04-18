import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { LoginModule } from './login/login.module';



@NgModule({
  imports: [
    CommonModule,
    AuthenticationModule,
    LoginModule
  ],
  exports: [
    CommonModule,
    AuthenticationModule,
    LoginModule
  ]
})
export class CoreModule { }
