import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthenticationService } from '@dg-frontend/data-access';

@Component({
  selector: 'dg-frontend-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  public isUserAuthenticated: boolean | undefined;
  public user!: object;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
    const token = localStorage.getItem("token");
    if (token) {
      this.user = this.getUserObject(token);
      if (token && !this.jwtHelper.isTokenExpired(token)) {
        this.isUserAuthenticated = true;
        this.authService.sendAuthStateChangeNotification(true);
        this.authService.sendUserObjStateChange(this.user);
      } else {
        this.isUserAuthenticated = false;
        this.authService.sendAuthStateChangeNotification(false);
      }
    }

    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
  }

  public logout = () => {
    localStorage.removeItem("token");
    this.authService.sendAuthStateChangeNotification(false);
    this.authService.sendUserObjStateChange({});
    this.router.navigate(['/']);
  }

  private getUserObject = (token: string)=>{
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return decodedToken;
  }
}
