import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  url = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }

  
  getUsers() {
    return this.httpClient.get(this.url);
  }

  getUsersByPage(page: number) {
    return this.httpClient.get(`${this.url}?page=${page}`);
  }

  getUserById(id:number){
    return this.httpClient.get(`${this.url}/${id}`);
  }

  create(user: User){
    return this.httpClient.post(this.url, user);
  }

  update(user: User ){
    return this.httpClient.put(`${this.url} / ${user.id}`, user);
  }

  delete(id: number){
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
