import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public userServ:UserService, public adminServ:AdminService) { }

  ngOnInit() {
    this.userServ.getAllPost();
    this.adminServ.getAllUsers();
  }

}
