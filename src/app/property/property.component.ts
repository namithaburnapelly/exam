import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Property } from '../property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {

  constructor(private dataService: DataService, private router: Router) { }

  // new propert entry
  registerProperty(values: Property) {
    this.dataService.registerProperty(values).subscribe(property => {
      console.log(property)
    })
    alert("New property added Successfully")

    this.router.navigateByUrl('/')
  }
}
