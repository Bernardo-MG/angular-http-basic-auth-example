import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  private tokenHeaderKey = 'Authorization';

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq;

    const token = this.authenticationService.getToken();

    if (token === null) {
      authReq = request;
    } else {
      authReq = request.clone({ headers: request.headers.set(this.tokenHeaderKey, 'Basic ' + token) });
    }

    return next.handle(authReq);
  }
}