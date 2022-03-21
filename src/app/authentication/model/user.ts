export class User {
    id: number = 0;
    username: string = '';
    password: string = '';
    logged: boolean = false;
    authdata?: string;
}