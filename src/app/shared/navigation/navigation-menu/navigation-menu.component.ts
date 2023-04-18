import { Component, Input } from '@angular/core';
import { MenuLink } from '../model/menu-link';
import { AuthenticationContainer } from '@app/core/authentication/service/authentication-container.service';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.sass']
})
export class NavigationMenuComponent {

  @Input() links: MenuLink[] = [];

  @Input() title: String = '';

  public loggedIn: boolean = false;

  constructor(
    private authenticationContainer: AuthenticationContainer
  ) {
    this.authenticationContainer.getUserObservable().subscribe(u => { this.loggedIn = u.logged });
  }

}
