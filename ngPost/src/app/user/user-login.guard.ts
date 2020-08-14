import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginGuard implements CanActivate {

  constructor (public router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if ((sessionStorage.getItem("sessionUserId") != null ) && (sessionStorage.getItem("sessionUserName") != null )) {
        return true;
      }
      else {
        this.router.navigate(['user/userLogin']);
        return false;
      }
  }
  
}
