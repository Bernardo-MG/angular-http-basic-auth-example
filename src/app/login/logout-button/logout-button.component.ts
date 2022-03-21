import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent {

  constructor(private loginService: LoginService) { }

  logout(){
    this.loginService.logout();
  }

}
