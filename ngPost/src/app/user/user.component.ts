import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from './user.service';

import { 
  faSignInAlt, 
  faUser, 
  faSignOutAlt,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(public userServ:UserService) { }

  ngOnInit() {
    this.subscription = this.userServ.sessionUserNameChanged.subscribe(
      (sessionUserName: string) => {
        this.sessionUserName = sessionUserName;
      }
    );
  }

  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faSignInAlt = faSignInAlt;
  faUserCircle = faUserCircle;
  isCollapsed = true;
  sessionUserName = sessionStorage.getItem("sessionUserName");

  userLogout(){
    this.userServ.userLogout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
