import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  @ViewChild('userAccountForm', {static:false}) userAccountForm: NgForm;

  constructor(public userServ:UserService) { }

  sessionUserId = sessionStorage.getItem("sessionUserId");

  ngOnInit() {
    this.userServ.getUserAccount(this.sessionUserId);
  }

  userAccountSubmit(){
    this.userServ.editUserAccount(this.userAccountForm.value);
  }

}
