import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@dg-frontend/data-access';

@Component({
  selector: 'dg-frontend-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  public isUserAuthenticated: boolean | undefined;
  public user!: object;

  constructor(private authService: AuthenticationService) { }

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
