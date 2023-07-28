import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@dg-frontend/data-access';

@Component({
  selector: 'dg-frontend-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  public isUserAuthenticated: boolean | undefined;
  public user!: object;

  constructor(private authService: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem("token");
    if (token) {
      this.user = this.getUserObject(token);
      if (this.tokenExpired(token)) {
        this.isUserAuthenticated = false;
        this.authService.sendAuthStateChangeNotification(false);
      } else {
        this.isUserAuthenticated = true;
        this.authService.sendAuthStateChangeNotification(true);
        this.authService.sendUserObjStateChange(this.user);
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
    let payload = token.split(".")[1];
        payload = window.atob(payload);
    return JSON.parse(payload);
  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
}
