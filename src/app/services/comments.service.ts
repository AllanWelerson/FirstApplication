import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private comments;
  private urlData = "https://jsonplaceholder.typicode.com/comments";

  constructor(private http: HttpClient) { }

  getCommentsPost(id: number){
    const request = this.http.get(`${this.urlData}?postId=${id}`);
    request.subscribe(data => this.comments = data);
    return request;
  }
}
