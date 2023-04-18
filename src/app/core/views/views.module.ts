import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CenteredLayoutComponent } from './containers/centered-layout/centered-layout.component';
import { HeaderLayoutComponent } from './containers/header-layout/header-layout.component';
import { NavigationModule } from '@app/shared/navigation/navigation.module';



@NgModule({
  declarations: [
    CenteredLayoutComponent,
    HeaderLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule
  ],
  exports:[
    CenteredLayoutComponent,
    HeaderLayoutComponent
  ]
})
export class ViewsModule { }
