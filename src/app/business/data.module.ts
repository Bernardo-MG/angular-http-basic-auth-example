import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListComponent } from './containers/data-list/data-list.component';
import { DataRoutingModule } from './data-routing.module';
import { DataService } from './service/data.service';
import { LayoutModule } from '@app/shared/layout/layout.module';



@NgModule({
  declarations: [
    DataListComponent
  ],
  imports: [
    DataRoutingModule,
    CommonModule,
    LayoutModule
  ],
  providers: [
    DataService
  ]
})
export class DataModule { }
