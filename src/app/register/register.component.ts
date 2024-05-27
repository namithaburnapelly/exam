import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private dataService: DataService, private router: Router) { }

  registerUser(values: User) {
    this.dataService.registerUser(values)
    console.log('user registered', values)
    alert("New user suceessfully added")
    this.router.navigateByUrl('/')
  }
}
