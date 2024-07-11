import { Component } from '@angular/core';
import { MyTicketsService } from '../../services/my-tickets.service';
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
  templateUrl: './my-tickets.component.html',
  styleUrl: './my-tickets.component.scss',
})
export class MyTicketsComponent {
  tickets: any[] = [];

  constructor(private myTicketsService: MyTicketsService) {}

  ngOnInit() {
    this.myTicketsService.getTickets().subscribe((res) => {
      this.tickets = res.body as any;
    });
  }
}
