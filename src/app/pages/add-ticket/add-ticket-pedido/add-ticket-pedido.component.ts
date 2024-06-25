import { Component, OnInit } from '@angular/core';
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';

interface Type {
  type: string;
}

@Component({
  selector: 'app-add-ticket',
  standalone: true,
  imports: [InputTextModule, InputTextareaModule, ButtonModule, DropdownModule, EditorModule],
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
}
