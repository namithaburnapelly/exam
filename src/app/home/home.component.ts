import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Property } from '../property';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  viewProperties: boolean = false
  properties: Property[] = [];

  constructor(private dataService: DataService) { }

  getAllProperties() {
    this.dataService.getAllProperties().subscribe(properties => {
      this.properties = properties
      console.log(properties)
    })
    this.viewProperties = !this.viewProperties
  }
}
