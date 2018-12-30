import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() public post;
  public user = {
  };

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUser(this.post.userId).subscribe( user => this.user = user);
  }


}
