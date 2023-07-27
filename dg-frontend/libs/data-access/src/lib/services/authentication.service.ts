import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { AuthResponseDto, UserForAuthenticationDto } from '@dg-frontend/data-access';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  BaseUrl="https://localhost:7212"

  private authChangeSub = new BehaviorSubject<boolean>(false)
  private userObjSub = new BehaviorSubject<object>({})
  public authChanged = this.authChangeSub.asObservable();
  public userObjChanged = this.userObjSub.asObservable();

  constructor( private http:HttpClient) { }
    
  public loginUser = (route: string, body: UserForAuthenticationDto) => {
    return this.http.post<AuthResponseDto>(this.createCompleteRoute(route, this.BaseUrl), body);
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  }

  public sendUserObjStateChange = (userObj: object) => {
    this.userObjSub.next(userObj);
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }  
}
