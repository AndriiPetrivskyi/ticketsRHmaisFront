import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class MyTicketsService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  getTickets() {
    return this.httpClient.get('http://localhost:3000/myTickets/getMyTickets', {
      observe: 'response',
    });
  }

  searchTickets(text: string): Observable<any> {
    let params = new HttpParams().set('text', text);
    return this.httpClient.get(`http://localhost:3000/myTickets/searchTickets`, { params, observe: 'response' })
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
