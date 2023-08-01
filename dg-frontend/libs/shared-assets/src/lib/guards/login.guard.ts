import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class loginGuard {
  constructor(private router:Router, private jwtHelper: JwtHelperService){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = localStorage.getItem("token");
    if (token && !this.jwtHelper.isTokenExpired(token)){
        this.router.navigate([""]);
      return false;
    }
    return true;
  }
}
