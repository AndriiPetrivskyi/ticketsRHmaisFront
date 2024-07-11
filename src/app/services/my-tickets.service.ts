import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MyTicketsService {
  constructor(private httpClient: HttpClient) {}

  getTickets() {
    return this.httpClient.get('http://localhost:3000/myTickets/', {
      observe: 'response',
    });
  }
}
