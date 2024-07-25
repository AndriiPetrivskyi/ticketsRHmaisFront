import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ResetPassService } from '../../services/reset-pass.service';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-reset-pass-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, MessagesModule],
  templateUrl: './reset-pass-request.component.html',
  styleUrls: ['./reset-pass-request.component.scss']
})
export class ResetPassRequestComponent {
  message: Message[] = [];

  resetPassForm = new FormGroup({
    email: new FormControl(''),
  });

  constructor(private resetPassRequestService: ResetPassService) {}

  sendLink() {
    const email = this.resetPassForm.get('email')?.value as string;

    this.resetPassRequestService.resetPassRequest(email).subscribe({
      next: (response) => {
        this.message = [{ severity: 'success', detail: 'Link sent successfully!' }];
      },
      error: (err) => {
        this.message = [{ severity: 'error', detail: 'Invalid email!' }];
      }
    });
  }
}
