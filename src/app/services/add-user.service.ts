import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AddUserService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  createUser(id: String, name: String, password: String, email: String, type: string) {
    if(id != null && name != null && password != null && email != null && type != null) {
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
        this.router.navigate(['/users']);
      });
    }
  }
}
