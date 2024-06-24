import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TicketsService {
  constructor(private httpClient: HttpClient) {}

  getTickets() {
    return this.httpClient.get('http://localhost:3000/tickets', {
      observe: 'response',
    });
  }
}
