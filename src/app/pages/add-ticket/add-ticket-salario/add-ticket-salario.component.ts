import { Component, OnInit } from '@angular/core';
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AddTicketSalarioService } from '../../../services/add-ticket-salario.service';

interface Type {
  type: string;
}

@Component({
  selector: 'app-add-ticket',
  standalone: true,
  imports: [InputTextModule, InputTextareaModule, ButtonModule, DropdownModule, EditorModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-ticket-salario.component.html',
  styleUrl: './add-ticket-salario.component.scss'
})
export class AddTicketSalarioComponent implements OnInit{
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

  constructor(private addticketsalarioService: AddTicketSalarioService) {}

  createTicket() {
    const subType = "None";
    const title = this.addTicketForm.get('title')?.value as string;
    const body = this.addTicketForm.get('body')?.value as string;
    const type = "Exportação";

    if (subType !== null && title !== null && body !== null) {
      this.addticketsalarioService.createTicket(subType, title, body, type);
  }
}
}