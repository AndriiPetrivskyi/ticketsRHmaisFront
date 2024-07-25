import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private httpClient: HttpClient) {}

  getTicket(ticketId: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:3000/ticket/getTicket`, {
      params: { ticketId }
    });
  }

  changeStatus(ticketStatus: string, ticketId: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/ticket/changeStatus', { ticketStatus, ticketId });
  }  

  createComment(comment: string, ticketId: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/ticket/createComment', { comment, ticketId });
  }

  createCommentUser(comment: string, ticketStatus: string, ticketId: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/ticket/createCommentUser', { comment, ticketStatus, ticketId});
  }
}
