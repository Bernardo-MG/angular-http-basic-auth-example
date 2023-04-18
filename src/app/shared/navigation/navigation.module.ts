import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationDropdownComponent } from './components/navigation-dropdown/navigation-dropdown.component';
import { LoginModule } from '@app/core/login/login.module';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NavigationDropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginModule
  ],
  exports: [
    NavbarComponent,
    NavigationDropdownComponent
  ]
})
export class NavigationModule { }
