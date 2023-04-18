import { Component } from '@angular/core';
import { AuthenticationContainer } from '@app/core/authentication/services/authentication-container.service';
import { MenuLink } from '@app/shared/navigation/model/menu-link';

@Component({
  selector: 'view-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.sass']
})
export class HeaderLayoutComponent {

  public title = 'angular-http-basic-auth-example';

  public links: MenuLink[] = [{ name: 'login', path: '/login' },{ name: 'data', path: '/data' }];

  public loggedIn = false;

  constructor(
    private authenticationContainer: AuthenticationContainer
  ) {
    this.authenticationContainer.getUserStatusObservable().subscribe(u => { this.loggedIn = u.logged });
  }

}
