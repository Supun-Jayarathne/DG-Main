import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@dg-frontend/data-access';

@Component({
  selector: 'dg-frontend-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  public isUserAuthenticated: boolean | undefined;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
      console.log('isAuthenticated-MenuComponent',res);
      
    })
  }
}
