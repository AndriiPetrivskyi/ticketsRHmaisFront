import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get('http://localhost:3000/users', {
      observe: 'response',
    });
  }

  changeStatus(id: number, status: string): Observable<any> {
    if(status === "Enabled") {
      return this.httpClient.post<any>(`http://localhost:3000/users/offuser`, {id});
    } else {
      return this.httpClient.post<any>(`http://localhost:3000/users/onuser`, {id});
    }
  }
}
