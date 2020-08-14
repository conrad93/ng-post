import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  @ViewChild('userLoginForm', {static:false}) userLoginForm:NgForm;

  constructor(public userServ:UserService) { }

  ngOnInit() {
  }

  userLoginSubmit() {
    this.userServ.userLogin(this.userLoginForm.value);
    this.userLoginForm.reset();
  }

}
