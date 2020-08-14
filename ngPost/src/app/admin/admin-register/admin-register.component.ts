import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  @ViewChild('adminRegisterForm', {static:false}) adminRegisterForm: NgForm;

  constructor(public adminServ:AdminService) { }

  ngOnInit() {
  }

  adminRegisterSubmit(){
    this.adminServ.register(this.adminRegisterForm.value);
    this.adminRegisterForm.reset();
  }

}
