import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/authentication/model/user';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {

  private tokenId: string = 'access_token';

  public user: User = new User();

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/login`, { username, password })
      .pipe(map(user => {
        let loggedUser;

        if (user) {
          loggedUser = user;
          const token = window.btoa(username + ':' + password);
          loggedUser.logged = true;
          localStorage.setItem(this.tokenId, token);
        } else {
          loggedUser = new User();
          localStorage.removeItem(this.tokenId);
        }

        this.user = loggedUser;
        return this.user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem(this.tokenId);
    this.user = new User();
    this.router.navigate(['/login']);
  }
}
