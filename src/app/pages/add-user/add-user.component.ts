import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AddUserService } from '../../services/add-user.service';
import { DropdownModule } from 'primeng/dropdown';

interface Type {
  type: string;
}

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, InputTextareaModule, InputTextModule, ButtonModule, ReactiveFormsModule, DropdownModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit {

  types: Type[] | undefined;

  ngOnInit() {
    this.types = [
      { type: 'user' },
      { type: 'admin'}
    ];
  }

  addUserForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    type: new FormControl(''),
  });

  constructor(private adduserService: AddUserService) {}

  createUser() {
    const id = this.addUserForm.get('id')?.value as string;
    const name = this.addUserForm.get('name')?.value as string;
    const email = this.addUserForm.get('email')?.value as string;
    const typeObject = this.addUserForm.get('type')?.value as { type: string } | null;

    if (typeObject !== null) {
      const type = typeObject.type;
      this.adduserService.createUser(id, name, email, type);
    } else {
      console.error("Type is null");
    }
  }
}
