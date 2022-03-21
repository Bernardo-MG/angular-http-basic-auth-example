import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavigationDropdownComponent } from './navigation-dropdown/navigation-dropdown.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';


@NgModule({
  declarations: [
    NavigationMenuComponent,
    NavigationDropdownComponent
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule,
    RouterModule
  ],
  exports: [
    NavigationMenuComponent
  ]
})
export class NavigationModule { }
