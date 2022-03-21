import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  private tokenHeaderKey = 'Authorization';

  constructor(private authenticationService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq;

    const token = this.authenticationService.getToken();

    if (token === null) {
      authReq = req;
    } else {
      authReq = req.clone({ headers: req.headers.set(this.tokenHeaderKey, 'Basic ' + token) });
    }

    return next.handle(authReq);
  }
}