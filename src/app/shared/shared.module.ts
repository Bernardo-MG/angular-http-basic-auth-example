import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationModule } from './navigation/navigation.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationModule
  ],
  exports: [
    CommonModule,
    NavigationModule
  ]
})
export class SharedModule { }
