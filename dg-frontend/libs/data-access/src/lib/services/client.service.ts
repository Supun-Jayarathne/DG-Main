import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor( private http:HttpClient) { }

  // getClients(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/posts`);
  // }

  // getClientById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
  // }

  // addClient(post: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/posts`, post);
  // }

  // updateClient(id: number, post: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/posts/${id}`, post);
  // }

  // deleteClient(id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/posts/${id}`);
  // }
}
