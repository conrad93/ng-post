import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginGuard implements CanActivate {

  constructor (public router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if ((sessionStorage.getItem("sessionAdminId") != null ) && (sessionStorage.getItem("sessionAdminName") != null )) {
      return true;
    }
    else {
      this.router.navigate(['adminLogin']);
      return false;
    }
  }
  
}
