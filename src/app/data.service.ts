import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from './property';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url = "https://exam-server-0esq.onrender.com"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/readUser`);
  }

  // new user entry
  registerUser(details: User) {
    return this.http.post(`${this.url}/register`, details);
  }

  // new propert entry
  registerProperty(propertyDetails: Property) {
    return this.http.post(`${this.url}/properties`, propertyDetails);
  }

  //delete property
  deleteProperty(id: number) {
    return this.http.delete(`${this.url}/properties/${id}`)
  }

  //update property
  updateProperty(propertyDetails: Property) {
    return this.http.put(`${this.url}/properties/${propertyDetails._id}`, propertyDetails)
  }

  //get specific seller properties
  getsellerProperties(name: string): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.url}/properties/seller/${name}`)
  }

  getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.url}/properties`)
  }

  getsellerDetails(name: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/getuser/${name}`)
  }
}
