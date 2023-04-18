import { Component } from '@angular/core';
import { Data } from '../../model/data';
import { BusinessService } from '../../service/business.service';

@Component({
  selector: 'business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.sass']
})
export class BusinessListComponent {

  data: Data[] = [];

  constructor(private dataService: BusinessService) {
    dataService.getData().subscribe(data => this.data = data);
  }

}
