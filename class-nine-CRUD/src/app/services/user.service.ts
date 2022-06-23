import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }

  //Create new user
  createUser(data:any){
    return this.http.post(`${url}/users`, data);
  }

  //Get All Users
  getUsers() {
    return this.http.get(`${url}/users`);
  }

  //Get Single User
  getSingleUser(id:any){
    return this.http.get(`${ url }/users/${ id }`);
  }

  //Update the user
  updateUser(data:any, id:any){
    return this.http.patch(`${url}/users/${id}`, data);
  }

  //Delete the user
  deleteUser(id:any){
    return this.http.delete(`${url}/users/${id}`);
  }

}
