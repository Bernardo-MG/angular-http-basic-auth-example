import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { SecurityContainer } from '../services/security-container.service';

/**
 * Basic HTTP authentication interceptor. Adds the basic authentication token to all request to
 * API requests, as long as the user in session is correctly logged in.
 */
@Injectable()
export class BasicAuthenticationInterceptor implements HttpInterceptor {

  /**
   * Token header for the authentication details.
   */
  private tokenHeaderKey = 'Authorization';

  /**
   * Authentication type identifier.
   */
  private tokenHeaderIdentifier = 'Basic'

  constructor(
    private securityContainer: SecurityContainer
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq;

    const isApiUrl = request.url.startsWith(environment.apiUrl);

    if (isApiUrl) {
      // It is a request to our API

      // Acquire the current user token
      const logged = this.securityContainer.getStatus().logged;
      const token = this.securityContainer.getStatus().token;

      if ((logged) && (token)) {
        // Has token
        // It is added to the request
        authReq = request.clone({ headers: request.headers.set(this.tokenHeaderKey, `${this.tokenHeaderIdentifier} ${token}`) });
      } else {
        // No token
        // No changes to request
        authReq = request;
      }
    } else {
      // External API
      authReq = request;
    }

    return next.handle(authReq);
  }

}