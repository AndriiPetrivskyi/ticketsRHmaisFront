import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { InputTextareaModule } from "primeng/inputtextarea";
import { EditorModule } from 'primeng/editor';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';

interface Status {
  status: string;
}

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, DropdownModule, ReactiveFormsModule, ButtonModule, InputTextareaModule, FormsModule, EditorModule, MessagesModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent implements OnInit {
  ticketId: any;
  ticket: any;
  status: Status[] | undefined;
  ticketForm: FormGroup;
  message: Message[] = [];

  createCommentForm = new FormGroup({
    comment: new FormControl(''),
  });

  constructor(private ticketService: TicketService, private route: ActivatedRoute, public authService: AuthenticationService) {
    this.ticketForm = new FormGroup({
      status: new FormControl(''),
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ticketId = params.get('id');

      this.ticketService.getTicket(this.ticketId).subscribe((response: any) => {
        if (response && response.length > 0) {
          this.ticket = response[0];
          this.ticketForm.patchValue({
            status: this.ticket.status
          });
        }
      }, error => {
        console.error('Error fetching ticket:', error);
      });
    });

    this.status = [
      { status: 'Aberto' },
      { status: 'Em resolução' },
      { status: 'Encaminhado para fornecedor' },
      { status: 'Encaminhado para NGRH' },
      { status: 'Devolvido ao criador' },
      { status: 'Cancelado' },
      { status: 'Concluído' },
    ];
  }

  changeStatus() {
    const selectedStatus = this.ticketForm.get('status')?.value;
  
    if (selectedStatus && selectedStatus !== this.ticket.status) {
      const ticketStatus = selectedStatus.status;
      
      window.location.reload();
      this.ticketService.changeStatus(ticketStatus, this.ticketId).subscribe(
        (response: any) => {
          console.log('Status changed successfully:', response);
        },
        (error: any) => {
          console.error('Error changing status:', error);
        }
      );
    }
  }

  createComment() {
    const comment = this.createCommentForm.get('comment')?.value as string;

    if(comment.length > 100) {
    window.location.reload();
    this.ticketService.createComment(comment, this.ticketId).subscribe();
    } else {
      this.message = [{ severity: 'error', detail: 'Minimum 100 symbols!' }];
  }
  }

  createCommentUser() {
    const status = "Encaminhado para fornecedor";
    const comment = this.createCommentForm.get('comment')?.value as string;

    if(comment.length > 100) {
      window.location.reload();
    this.ticketService.createCommentUser(comment, status, this.ticketId).subscribe();
    } else {
        this.message = [{ severity: 'error', detail: 'Minimum 100 symbols!' }];
    }
  }
}
