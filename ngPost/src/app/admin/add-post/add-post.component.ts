import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @ViewChild('addPostForm', {static:false}) addPostForm: NgForm;

  constructor(public adminServ:AdminService) { }

  ngOnInit() {
  }

  imgChg;
  imageChange(event){
    this.imgChg = event.target.files[0];
  }
  addPostSubmit(){
    if (this.imgChg != null) {
      this.adminServ.upload(this.addPostForm.value, this.imgChg);
      this.addPostForm.reset();
    } else {
      this.imgChg = "default-image.jpg";
      this.adminServ.insert(this.addPostForm.value, this.imgChg);
      this.addPostForm.reset();
    }
  }

}
