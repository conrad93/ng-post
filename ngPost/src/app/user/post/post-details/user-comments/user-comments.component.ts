import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css']
})
export class UserCommentsComponent implements OnInit {

  @ViewChild('addCommentForm', {static:false}) addCommentForm: NgForm;
  @ViewChild('editCommentForm', {static:false}) editCommentForm: NgForm;

  constructor(private route:ActivatedRoute, public userServ:UserService, private modalService: BsModalService) { }

  postId = this.route.snapshot.params['postId'];
  sessionUserId = sessionStorage.getItem("sessionUserId");

  ngOnInit() {
    this.userServ.getAllComment(this.postId);
  }

  addCommentSubmit(){
    if (this.sessionUserId == null){
      alert("Please sign-in!!!")
    } else {
      this.userServ.insertComment(this.addCommentForm.value, this.postId);
      this.addCommentForm.reset();
    }
  }

  deleteComment(commentId, index){
    var flag = confirm("Do you want to delete?");
    if (flag){
      this.userServ.deleteSingleComment(commentId, index);
    }
  }

  index: number;
  commentId: number;
  public modalRef: BsModalRef;
  editCommentModal(editCommentTemplate, commentId, index) {
    this.index = index;
    this.commentId = commentId;
    this.userServ.getSingleComment(commentId);
    this.modalRef = this.modalService.show(editCommentTemplate);
  }

  editCommentSubmit(data){
    this.userServ.editSingleComment(data.value, this.commentId, this.index);
    this.modalRef.hide();
  }

}
