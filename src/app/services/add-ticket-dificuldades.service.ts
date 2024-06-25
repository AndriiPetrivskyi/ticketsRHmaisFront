import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddTicketDificuldadesService {
  constructor(private httpClient: HttpClient) {}

  createTicket() {
    this.httpClient
      .post('http://localhost:3000/', {
      })
      .subscribe((response: any) => {
        console.log('addUser response: ', response);
      });
  }
}
