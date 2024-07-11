import { Component, OnInit } from '@angular/core';
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AddTicketPedidoService } from '../../../services/add-ticket-pedido.service';

interface Type {
  type: string;
}

@Component({
  selector: 'app-add-ticket',
  standalone: true,
  imports: [InputTextModule, InputTextareaModule, ButtonModule, DropdownModule, EditorModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-ticket-pedido.component.html',
  styleUrl: './add-ticket-pedido.component.scss'
})
export class AddTicketPedidoComponent implements OnInit{
  types: Type[] | undefined;

  ngOnInit() {
    this.types = [
      { type: 'WFM' },
      { type: 'Paperless'},
      { type: 'SmartClockings'}
    ];
  }

  addTicketForm = new FormGroup({
    type: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private addticketpedidoService: AddTicketPedidoService) {}

  createTicket() {
    const typeObject = this.addTicketForm.get('type')?.value as {type: string} | null;
    const title = this.addTicketForm.get('title')?.value as string;
    const body = this.addTicketForm.get('body')?.value as string;
    const type = "Esclarcimento";

    if (typeObject !== null && title !== null && body !== null) {
      const subType = typeObject.type;
      this.addticketpedidoService.createTicket(subType, title, body, type);
  }
}
}