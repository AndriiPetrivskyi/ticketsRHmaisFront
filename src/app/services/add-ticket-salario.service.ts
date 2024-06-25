import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddTicketSalarioService {
  constructor(private httpClient: HttpClient) {}
}
