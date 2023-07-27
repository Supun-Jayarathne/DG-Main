import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'dg-frontend-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit{
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
