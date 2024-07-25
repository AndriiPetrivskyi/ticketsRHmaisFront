// login.component.ts
import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, RouterModule, MessagesModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  message: Message[] = [];

  loginForm = new FormGroup({
    id: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthenticationService) {}

  login() {
    const id = this.loginForm.get('id')?.value as string;
    const password = this.loginForm.get('password')?.value as string;

    this.authService.login(id, password).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
      },
      error: (err) => {
        this.message = [{ severity: 'error', detail: 'Wrong ID and/or password' }];
      }
    });
  }
}
