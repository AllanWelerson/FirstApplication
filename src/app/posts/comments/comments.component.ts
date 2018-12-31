import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments;
  @Input() public postId: number;

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.commentsService.getCommentsPost(this.postId).subscribe( comment => this.comments = comment);
  }

}
