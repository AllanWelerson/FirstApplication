import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService, UsersService]
})
export class PostsComponent implements OnInit {


  public posts;

  constructor(private postsServices: PostsService, private usersService: UsersService) {

  }

  ngOnInit() {
   this.postsServices.getPosts().subscribe( post => this.posts = post);
  }


}
