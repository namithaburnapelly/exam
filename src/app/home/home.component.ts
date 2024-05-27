import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Property } from '../property';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  viewProperties: boolean = false
  viewSellerDetails: boolean = false;
  properties: Property[] = [];
  sellerDetails: User[] = [];

  constructor(private dataService: DataService) { }

  getAllProperties() {
    this.dataService.getAllProperties().subscribe(properties => {
      this.properties = properties
      console.log(properties)
    })
    this.viewProperties = !this.viewProperties
    this.viewSellerDetails = false
  }

  getsellerDetails(name: string) {
    this.dataService.getsellerDetails(name).subscribe(values => {
      console.log(values)
      this.sellerDetails = values
    })
    this.viewSellerDetails = true;
  }
}
