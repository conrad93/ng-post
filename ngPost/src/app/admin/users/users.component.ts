import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild('editUserForm', {static:false}) editUserForm: NgForm;

  constructor(public adminServ:AdminService, private modalService: BsModalService) { }

  ngOnInit() {
    this.adminServ.getAllUsers();
  }

  deleteUser(userId, index){
    var flag = confirm("Do you want to delete?");
    if (flag){
      this.adminServ.deleteUser(userId, index);
    }
  }

  index: number;
  userId: number;
  public modalRef: BsModalRef;
  editUsersModal(editUsersTemplate, userId, index){
    this.index = index;
    this.userId = userId;
    this.adminServ.getSingleUser(userId);
    this.modalRef = this.modalService.show(editUsersTemplate);
  }

  editUserSubmit(data){
    this.adminServ.editSingleUser(data.value, this.userId, this.index);
    this.modalRef.hide();
  }

}
