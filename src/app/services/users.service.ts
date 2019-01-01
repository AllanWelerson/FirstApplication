import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users;
  private user;
  private urlData = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getUsers() {
    const request = this.http.get(this.urlData);
    request.subscribe(data => this.users = data);
    return request;
  }

  getUser(id: number){
    const request = this.http.get(`${this.urlData}/${id}`);
    request.subscribe(user => this.user = user);
    return request;
  }
}
