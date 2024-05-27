import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Property } from '../property';

@Component({
  selector: 'app-seller-properties',
  templateUrl: './seller-properties.component.html',
  styleUrls: ['./seller-properties.component.css']
})
export class SellerPropertiesComponent {

  selectedProperty: Property | null = null;
  properties: Property[] = []
  name!: string;
  viewdata: boolean = false

  constructor(private dataService: DataService) { }


  getsellerProperties(name: string) {
    this.dataService.getsellerProperties(name).subscribe(properties => {
      console.log(properties)
      this.properties = properties
    })
    this.viewdata = true
  }

  //delete property
  deleteProperty(id: number, seller: string) {
    this.dataService.deleteProperty(id).subscribe(() => {
      console.log('property deleted')
      alert('Property deleted')
      // this.viewdata = false
      this.getsellerProperties(seller)
    })

  }

  //update property
  editProperty(property: Property) {
    this.selectedProperty = { ...property }; // Create a copy of the selected property for editing
  }
  updateProperty(name: string) {
    if (this.selectedProperty) {
      this.dataService.updateProperty(this.selectedProperty).subscribe(property => {
        console.log('property updated', property)
        this.getsellerProperties(name)
      })
      this.selectedProperty = null
    }
  }
}
