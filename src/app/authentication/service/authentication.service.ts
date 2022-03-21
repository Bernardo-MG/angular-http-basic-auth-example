import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {

    public user: User = new User();
    
    constructor(
      private http: HttpClient
    ) { }
  
    login(username: string, password: string): Observable<User> {
      return this.http.post<User>(`${environment.apiUrl}/auth/login/`, { username, password })
        .pipe(map(user => {
          let loggedUser;
  
          if (user) {
            loggedUser = user;
            const token = window.btoa(username + ':' + password);
            loggedUser.logged = true;
            loggedUser.token = token;
          } else {
            loggedUser = new User();
          }
  
          this.user = loggedUser;
          return this.user;
        }));
    }
  
    logout() {
      this.user = new User();
    }

    getUser(): User {
        return this.user;
    }

}