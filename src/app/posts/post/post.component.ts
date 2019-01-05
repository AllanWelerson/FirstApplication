import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() public post;
  public user;
  public showComments = false;
  public txtButton = 'Show Comments';

  constructor(private usersService: UsersService) {
    this.user = {
      name : ""
    }
  }

  ngOnInit() {

    this.usersService.getUser(this.post.userId).subscribe( user => this.user = user);
  }

  showCommentsControl(){
    this.showComments = !this.showComments;
    this.txtButton = this.showComments ? 'Hide Comments' : 'Show Comments ';
  }


}
