import { Component } from '@angular/core';
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';


@Component({
  selector: 'app-add-ticket',
  standalone: true,
  imports: [InputTextModule, InputTextareaModule, ButtonModule, DropdownModule, EditorModule],
  templateUrl: './add-ticket-sugestoes.component.html',
  styleUrl: './add-ticket-sugestoes.component.scss'
})
export class AddTicketSugestoesComponent {

}
