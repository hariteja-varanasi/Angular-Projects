import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private _http: HttpClient) {}

  url = "http://localhost:7000/enroll";

  enroll(user: User){
    return this._http.post<any>(this.url, user);
  }
}
