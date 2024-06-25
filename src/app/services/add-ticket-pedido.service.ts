import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddTicketPedidoService {
  constructor(private httpClient: HttpClient) {}
}
