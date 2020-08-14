import { Component, OnInit } from '@angular/core';

import { faComment } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public userServ:UserService) { }

  ngOnInit() {
    this.userServ.getAllPost();
  }

  faComment = faComment;

}
