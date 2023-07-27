import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@dg-frontend/data-access';

@Component({
  selector: 'dg-frontend-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  public isUserAuthenticated: boolean | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public userObj: any | undefined;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })
    this.authService.userObjChanged
    .subscribe(res => {
      this.userObj = res;
    })
  }
}
