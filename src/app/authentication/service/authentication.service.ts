import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private userSubject: BehaviorSubject<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(new User());
    }

    public get user(): User {
        return this.userSubject.value;
    }

    login(username: string, password: string): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/login`, { username, password })
            .pipe(map(user => {
                let loggedUser;

                if (user) {
                    loggedUser = user;
                    loggedUser.authdata = window.btoa(username + ':' + password);
                    loggedUser.logged = true;
                } else {
                    loggedUser = new User();
                }

                this.userSubject.next(loggedUser);
                return loggedUser;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(new User());
        this.router.navigate(['/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

}