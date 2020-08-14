import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  @ViewChild('userRegisterForm', {static:false}) userRegisterForm: NgForm;

  constructor(public userServ:UserService) { }

  ngOnInit() {
  }

  userRegisterSubmit(){
    this.userServ.userRegister(this.userRegisterForm.value);
    this.userRegisterForm.reset();
  }

}
