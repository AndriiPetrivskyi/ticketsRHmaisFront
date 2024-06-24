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
      { type: 'User' },
      { type: 'Admin'}
    ];
  }

  addUserForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    type: new FormControl(''),
  });

  constructor(private adduserService: AddUserService) {}

  criarUser() {
    const id = this.addUserForm.get('id')?.value as string;
    const name = this.addUserForm.get('name')?.value as string;
    const password = this.addUserForm.get('password')?.value as string;
    const email = this.addUserForm.get('email')?.value as string;
    const type = this.addUserForm.get('type')?.value as string;

    this.adduserService.criarUser(id, name, password, email, type);
  }
}
