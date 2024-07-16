import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent implements OnInit{
  ticketId: any;
  ticket: any;

  constructor(private ticketService: TicketService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ticketId = params.get('id');

      this.ticketService.getTicket(this.ticketId).subscribe((response: any) => {
        if (response && response.length > 0) {
          this.ticket = response[0];
        }
      }, error => {
        console.error('Error fetching ticket:', error);
      });
    });
  }
}
