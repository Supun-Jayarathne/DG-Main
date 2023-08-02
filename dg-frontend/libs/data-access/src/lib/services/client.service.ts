import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserForAuthenticationDto } from '@dg-frontend/data-access';
import { clientProjectDto } from '../interfaces/clientProjectDto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  BaseUrl="https://localhost:7212"


  constructor( private http:HttpClient) { }

  public addClientProject = (body: clientProjectDto) => {
    return this.http.post<number>(this.createCompleteRoute(`${this.BaseUrl}`, "ClientProject"), body);
  }

  private createCompleteRoute = (envAddress: string, route: string) => {
    return `${envAddress}/${route}`;
  }

  // addClient(post: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/clients`, post);
  // }

}
