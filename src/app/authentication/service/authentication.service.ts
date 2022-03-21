import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

    private tokenId: string = 'access_token';

    constructor() { }

    getToken(): string | null {
        return localStorage.getItem(this.tokenId);
    }

}