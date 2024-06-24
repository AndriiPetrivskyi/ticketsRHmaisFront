import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
})
export class TicketsComponent {
  tickets: any[] = [];

  constructor(private ticketsService: TicketsService) {}
  ngOnInit() {
    this.ticketsService.getTickets().subscribe((res) => {
      this.tickets = res.body as any;
    });
  }
}
