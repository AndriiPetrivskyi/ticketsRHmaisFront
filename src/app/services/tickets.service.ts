import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  constructor(private http: HttpClient, private router: Router) {}

  getTickets(): Observable<any> {
    return this.http.get(`http://localhost:3000/tickets/getTickets`, { observe: 'response' })
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }

  searchTickets(text: string): Observable<any> {
    let params = new HttpParams().set('text', text);
    return this.http.get(`http://localhost:3000/tickets/searchTickets`, { params, observe: 'response' })
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }

  openTicket(ticket: any) {
    this.router.navigate(['/ticket', ticket.id]);
  }
}
