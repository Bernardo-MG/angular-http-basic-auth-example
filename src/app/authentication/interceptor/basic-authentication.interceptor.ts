import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';


@Injectable()
export class BasicAuthenticationInterceptor implements HttpInterceptor {

  private tokenHeaderKey = 'Authorization';

  private tokenHeaderIdentifier = 'Basic'

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq;

    // Acquire the current user token
    const token = this.authenticationService.getUser().token;

    if (token) {
      // Has token
      // It is added to the request
      authReq = request.clone({ headers: request.headers.set(this.tokenHeaderKey, `${this.tokenHeaderIdentifier} ${token}`) });
    } else {
      // No token
      // No changes to request
      authReq = request;
    }

    return next.handle(authReq);
  }

}