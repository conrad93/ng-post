import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, public userServ:UserService) { }

  ngOnInit() {
    const postId = this.route.snapshot.params['postId'];
    this.userServ.getPostDetails(postId);
  }

  faComment = faComment;

}
