import { Component, OnInit } from '@angular/core';
import { MyTicketsService } from '../../services/my-tickets.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule, RouterLink, ToolbarModule, InputTextModule, RouterModule],
  templateUrl: './my-tickets.component.html',
  styleUrl: './my-tickets.component.scss',
})
export class MyTicketsComponent {
  tickets: any[] = [];

  constructor(private myTicketsService: MyTicketsService) {}

  ngOnInit() {
    this.loadTickets();
  }

  loadTickets() {
    this.myTicketsService.getTickets().subscribe(
      (res: any) => {
        this.tickets = res.body as any[];
      },
      (error) => {
        console.error('Error loading tickets: ', error);
      }
    );
  }

  searchTickets(text: string) {
    if (text.trim() === '') {
      this.loadTickets(); // Reload all tickets if search text is empty
      return;
    }

    this.myTicketsService.searchTickets(text).subscribe(
      (res: any) => {
        this.tickets = res.body as any[];
      },
      (error) => {
        console.error('Error searching tickets: ', error);
      }
    );
  }

  openTicket(ticket: any) {
    this.myTicketsService.openTicket(ticket);
  }
}
