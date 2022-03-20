import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationTokenService } from '../service/authentication-token.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private tokenHeaderKey = 'Authorization';

  constructor(private token: AuthenticationTokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(this.tokenHeaderKey, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}