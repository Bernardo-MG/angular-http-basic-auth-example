import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessListComponent } from './containers/business-list/business-list.component';
import { BusinessRoutingModule } from './business-routing.module';
import { BusinessService } from './service/business.service';
import { LayoutModule } from '@app/shared/layout/layout.module';



@NgModule({
  declarations: [
    BusinessListComponent
  ],
  imports: [
    BusinessRoutingModule,
    CommonModule,
    LayoutModule
  ],
  providers: [
    BusinessService
  ]
})
export class BusinessModule { }
