import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../user/user.service'
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  @ViewChild('editPostForm', {static:false}) editPostForm: NgForm;

  constructor(public userServ:UserService, public adminServ:AdminService, private modalService: BsModalService) { }

  ngOnInit() {
    this.userServ.getAllPost();
  }

  deletePost(postId, index){
    var flag = confirm("Do you want to delete?");
    if (flag){
      this.adminServ.deletePost(postId, index);
    }
  }

  postId: number;
  index: number;
  public modalRef: BsModalRef;
  editPostModal(editPostTemplate, postId, index) {
    this.userServ.getPostDetails(postId);
    this.postId = postId;
    this.index = index;
    this.modalRef = this.modalService.show(editPostTemplate);
  }

  imgChg;
  imageChange(event) {
    this.imgChg = event.target.files[0];
  }

  editPostSubmit(data){
    if (this.imgChg != null) {
      this.adminServ.uploadNew(data.value, this.imgChg, this.postId, this.index);
      this.modalRef.hide();
    } else {
      this.imgChg = this.userServ.postDetailsData.image;
      this.adminServ.insertNew(data.value, this.imgChg, this.postId, this.index);
      this.modalRef.hide();
    }
  }

}
