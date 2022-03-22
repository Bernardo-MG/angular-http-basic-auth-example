import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/authentication/service/authentication.service';

@Component({
  selector: 'logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
