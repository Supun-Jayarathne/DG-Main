import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@dg-frontend/data-access';

@Component({
  selector: 'dg-frontend-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  public isUserAuthenticated: boolean | undefined;

  constructor(private authService: AuthenticationService) { }

  
  ngOnInit(): void {
    console.log('NavMenuComponent');
    const token = localStorage.getItem("token");
    if (token) {
      this.isUserAuthenticated = true;
    }
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
      console.log('isAuthenticated-MenuComponent',res);
      
    })
    console.log('NavMenuComponent-isUserAuthenticated',this.isUserAuthenticated);
  }
}
