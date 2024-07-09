import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ResetPassService } from '../../services/reset-pass.service';

@Component({
  selector: 'app-reset-pass-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './reset-pass-request.component.html',
  styleUrl: './reset-pass-request.component.scss'
})
export class ResetPassRequestComponent {
  resetPassForm = new FormGroup({
    email: new FormControl(''),
  });

  constructor(private resetPassRequestService: ResetPassService) {}

  sendLink() {
    const email = this.resetPassForm.get('email')?.value as string;

    this.resetPassRequestService.resetPassRequest(email).subscribe(
      response => alert('Email with link sented successfully, open your mailbox'),
      error => console.error('Error sending email', error)
    );
  }
}
