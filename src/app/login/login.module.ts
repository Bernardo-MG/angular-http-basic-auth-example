import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ItemLoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    ItemLoginRoutingModule,
    CommonModule
  ]
})
export class LoginModule { }
