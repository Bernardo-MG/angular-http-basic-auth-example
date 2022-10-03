import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@app/api/model/api-response';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginStatus } from '../model/login-status';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private loginUrl = environment.apiUrl + "/login";

  private userKey = 'user';

  private userSubject: BehaviorSubject<User>;

  private user: Observable<User>;

  private rememberMe = false;

  constructor(
    private http: HttpClient
  ) {
    this.userSubject = this.readUserFromLocal();
    this.user = this.userSubject.asObservable();
  }

  public login(username: string, password: string): Observable<User> {
    return this.http.post<ApiResponse<LoginStatus>>(this.loginUrl, { username, password })
      .pipe(map(response => response.content))
      .pipe(map(r => this.loadUser(r)));
  }

  public logout() {
    this.userSubject.next(new User());
    localStorage.removeItem(this.userKey);
  }

  public getUser(): User {
    return this.userSubject.value;
  }

  public getUserObservable(): Observable<User> {
    return this.user;
  }

  public setRememberMe(remember: boolean) {
    this.rememberMe = remember;
  }

  private readUserFromLocal(): BehaviorSubject<User> {
    let subject: BehaviorSubject<User>;

    // If the user was stored, load it
    const localUser = localStorage.getItem(this.userKey);
    if (localUser) {
      // User found in local storage
      const readUser = JSON.parse(localUser);
      subject = new BehaviorSubject<User>(readUser);
    } else {
      // User not found
      // Use default user
      subject = new BehaviorSubject<User>(new User());
    }

    return subject;
  }

  private loadUser(status: LoginStatus): User {
    let loggedUser;

    loggedUser = new User();
    if (status) {
      // Received data
      loggedUser.username = status.username;
      loggedUser.logged = status.logged;
      loggedUser.token = status.token;

      if (this.rememberMe) {
        // Store user
        localStorage.setItem(this.userKey, JSON.stringify(loggedUser));
      }
    }

    this.userSubject.next(loggedUser);
    return this.getUser();
  }

}