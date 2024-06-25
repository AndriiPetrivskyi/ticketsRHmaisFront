import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule, RouterLink, ToolbarModule, InputTextModule],
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
