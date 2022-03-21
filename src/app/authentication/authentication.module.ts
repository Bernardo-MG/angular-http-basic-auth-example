import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './interceptor/authentication.interceptor';
import { AuthenticationService } from './service/authentication.service';
import { AuthenticationTokenService } from './service/authentication-token.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationTokenService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }
  ]
})
export class AuthenticationModule { }
