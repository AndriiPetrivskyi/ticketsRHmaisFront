import { Component, OnInit } from '@angular/core';
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AddReportService } from '../../services/add-report.service';

interface Type {
  type: string;
}

@Component({
  selector: 'app-add-report',
  standalone: true,
  imports: [InputTextModule, InputTextareaModule, ButtonModule, DropdownModule, EditorModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-report.component.html',
  styleUrl: './add-report.component.scss'
})
export class AddReportComponent implements OnInit{
  types: Type[] | undefined;

  ngOnInit() {
    this.types = [
      { type: 'WFM' },
      { type: 'Paperless'},
      { type: 'SmartClockings'}
    ];
  }

  addReportForm = new FormGroup({
    type: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private addreportService: AddReportService) {}

  createReport() {
    const typeObject = this.addReportForm.get('type')?.value as {type: string} | null;
    const title = this.addReportForm.get('title')?.value as string;
    const body = this.addReportForm.get('body')?.value as string;
    const type = "Indisponiblidade";

    if (typeObject !== null && title !== null && body !== null) {
      const subType = typeObject.type;
      this.addreportService.createReport(subType, title, body, type);
  }
}
}