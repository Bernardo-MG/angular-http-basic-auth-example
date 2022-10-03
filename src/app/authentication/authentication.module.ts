import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BasicAuthenticationInterceptor } from './interceptor/basic-authentication.interceptor';
import { UnauthorizedErrorInterceptor } from './interceptor/unauthorized.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthenticationInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedErrorInterceptor, multi: true }
  ]
})
export class AuthenticationModule { }
