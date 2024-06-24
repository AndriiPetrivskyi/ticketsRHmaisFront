import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddUserService {
  constructor(private httpClient: HttpClient) {}

  criarUser(id: String, name: String, password: String, email: String, type: String) {
    this.httpClient
      .post('http://localhost:3000/addUser/addUser', {
        id,
        name,
        password,
        email,
        type,
      })
      .subscribe((response: any) => {
        console.log('addUser response: ', response);
      });
  }
}
