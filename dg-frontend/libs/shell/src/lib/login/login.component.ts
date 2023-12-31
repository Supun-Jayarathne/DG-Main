import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthResponseDto, AuthenticationService, UserForAuthenticationDto } from '@dg-frontend/data-access';

@Component({
  selector: 'dg-frontend-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private returnUrl: string | undefined;
  
  loginForm!: FormGroup;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  errorMessage: string = '';
  showError: boolean | undefined;
  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  validateControl = (controlName: string) => {
    return (this.loginForm.controls[controlName].invalid && this.loginForm.controls[controlName].touched )
    || this.loginForm.controls[controlName].value==''
  }
  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName)
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loginUser = (loginFormValue: any) => {
    this.showError = false;
    const login = {... loginFormValue };
    const userForAuth: UserForAuthenticationDto = {
      userName: login.username,
      password: login.password
    }
    if (login.username && login.password) { 
      this.authService.loginUser('api/Auth/login', userForAuth)
      .subscribe({
        next: (res:AuthResponseDto) => {
         localStorage.setItem("token", res.message);
         this.authService.sendAuthStateChangeNotification(res.isSucceed);
         this.authService.sendUserObjStateChange(this.getUserObject(res.message));
         this.router.navigate([this.returnUrl]);
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.showError = true;
      }})
    }
  }

  private getUserObject = (token: string)=>{
    let payload = token.split(".")[1];
        payload = window.atob(payload);
    return JSON.parse(payload);
  }
}
