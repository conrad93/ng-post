import { Component, OnInit, OnDestroy } from '@angular/core';

import { AdminService } from './admin.service';

import { 
  faUserShield,
  faCaretDown, 
  faUser, 
  faSignOutAlt 
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(public adminServ:AdminService) { }

  ngOnInit() {
    this.subscription = this.adminServ.sessionAdminNameChanged.subscribe(
      (sessionAdminName: string) => {
        this.sessionAdminName = sessionAdminName;
      }
    );
  }

  faUserShield = faUserShield;
  faCaretDown = faCaretDown;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  isCollapsed = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  sessionAdminName = sessionStorage.getItem("sessionAdminName");

  adminLogout(){
    this.adminServ.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
