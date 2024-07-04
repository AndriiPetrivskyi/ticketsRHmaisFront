import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AddTicketDificuldadesService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  private type = "dificuldades";

  createTicket(subType: string, title: string, body: string, type: string) {
    this.httpClient
      .post('http://localhost:3000/addTicket/addTicket', {
        subType,
        title,
        body,
        type,
      })
      .subscribe((response: any) => {
        console.log('addUser response: ', response);
        this.router.navigate(['/tickets']);
      });
  }
}
