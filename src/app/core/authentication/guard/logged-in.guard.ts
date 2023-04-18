import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityContainer } from '../services/security-container.service';

/**
 * Logged in guard. Allows access only if the user in session is logged in. Otherwise redirects
 * to the login form.
 */
@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  /**
   * Login form route.
   */
  private loginRoute = '/login';

  constructor(
    private router: Router,
    private securityContainer: SecurityContainer
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const logged = this.securityContainer.getStatus().logged;
    let active;

    if (logged) {
      // Logged in
      active = true;
    } else {
      // Not logged in
      // Redirect to login
      this.router.navigate([this.loginRoute], { queryParams: { returnUrl: state.url } });
      active = false;
    }

    return active;
  }

}
