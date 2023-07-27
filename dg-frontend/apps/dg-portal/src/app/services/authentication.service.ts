import { Injectable } from '@angular/core';
import { UserForAuthenticationDto } from '../Interfaces/UserForAuthenticationDto';
import { HttpClient } from '@angular/common/http';
import { AuthResponseDto } from '../Interfaces/AuthResponseDto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
BaseUrl="https://localhost:7212"
private authChangeSub = new Subject<boolean>()
public authChanged = this.authChangeSub.asObservable();
  constructor( private http:HttpClient) { }
  
  public loginUser = (route: string, body: UserForAuthenticationDto) => {
    return this.http.post<AuthResponseDto>(this.createCompleteRoute(route, this.BaseUrl), body);
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    console.log("isAuthenticated-AuthenticationService",isAuthenticated);
    this.authChangeSub.next(isAuthenticated);
    console.log("authChanged-AuthenticationService",this.authChanged);

  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}
