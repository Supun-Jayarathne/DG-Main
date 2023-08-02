import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientProjectService {
  BaseUrl="https://localhost:7212"

  constructor(private http:HttpClient) { }

  public getClientProjects = () => {
    return this.http.get<any>(this.createCompleteRoute(`${this.BaseUrl}`,'ClientProject',));
  }

  private createCompleteRoute = (envAddress: string,route: string, ) => {
    return `${envAddress}/${route}`;
  }  
}
