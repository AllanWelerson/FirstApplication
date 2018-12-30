import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts;
  private urlData = 'https://jsonplaceholder.typicode.com/posts';



  constructor(private http: HttpClient) { }

  public getPosts(){
    const request = this.http.get(this.urlData);
    request.subscribe(data => this.posts = data);
    return request;
  }


}
