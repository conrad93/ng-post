import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

  @ViewChild('adminAccountForm', {static:false}) adminAccountForm: NgForm;

  constructor(public adminServ:AdminService) { }

  sessionAdminId = sessionStorage.getItem("sessionAdminId");

  ngOnInit() {
    this.adminServ.getAdminAccount(this.sessionAdminId);
  }

  adminAccountSubmit(){
    this.adminServ.editAdminAccount(this.adminAccountForm.value);
  }

}
