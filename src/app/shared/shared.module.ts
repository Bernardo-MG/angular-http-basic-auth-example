import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationModule } from './navigation/navigation.module';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationModule,
    LayoutModule
  ],
  exports: [
    CommonModule,
    NavigationModule,
    LayoutModule
  ]
})
export class SharedModule { }
