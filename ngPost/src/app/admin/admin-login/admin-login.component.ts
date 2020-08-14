import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  @ViewChild('adminLoginForm', {static:false}) adminLoginForm:NgForm;

  constructor(public adminServ:AdminService) { }

  ngOnInit() {
  }

  adminLoginSubmit() {
    this.adminServ.login(this.adminLoginForm.value);
    this.adminLoginForm.reset();
  }

}
