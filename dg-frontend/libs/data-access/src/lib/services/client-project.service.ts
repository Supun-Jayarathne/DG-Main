import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clientProjectDto } from '../interfaces/clientProjectDto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClientProjectService {
  BaseUrl="https://localhost:7212"

  constructor(private http:HttpClient) { }

  public getClientProjects = () => {
    return this.http.get<any>(this.createCompleteRoute(`${this.BaseUrl}`,'ClientProject',));
  }

  public addClientProject = (body: clientProjectDto) => {
    return this.http.post<number>(this.createCompleteRoute(`${this.BaseUrl}`, "ClientProject"), body);
  }


  private createCompleteRoute = (envAddress: string,route: string, ) => {
    return `${envAddress}/${route}`;
  }  
}
