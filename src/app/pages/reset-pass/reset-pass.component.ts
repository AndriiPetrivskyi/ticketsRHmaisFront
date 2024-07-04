import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ResetPassService } from '../../services/reset-pass.service';

@Component({
  selector: 'app-reset-pass',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss'] // Corrected styleUrls instead of styleUrl
})
export class ResetPassComponent {
  // Form group to manage the form controls for resetting the password
  resetPassForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    pin: new FormControl(''),
  });

  // Variable to store the generated PIN
  private generatedPin: string | null = null;

  constructor(private resetPassService: ResetPassService) {}

  // Method to reset the password by checking the entered PIN against the generated PIN
  resetPass() {
    const enteredPin = this.resetPassForm.get('pin')?.value as string;
    const storedPin = this.generatedPin;
    const email = this.resetPassForm.get('email')?.value as string;
    const password = this.resetPassForm.get('password')?.value as string;

    if (enteredPin === storedPin && email && password) {
      console.log("PIN is correct. Proceeding to change the password.");
      
      const changePassData = {
        email: email,
        newPassword: password
      };

      this.resetPassService.changePass(changePassData)
    } else {
      console.log("Incorrect PIN or missing email/password.");
    }
  }

  // Method to send an email with a generated PIN for password reset
  onSendEmail() {
    const pin = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit PIN
    this.generatedPin = pin.toString(); // Store the generated PIN
    const email = this.resetPassForm.get('email')?.value as string;

    const emailData = {
      to: email,
      subject: 'PIN to reset password',
      text: this.generatedPin
    };

    // Send the email using the email service
    this.resetPassService.sendEmail(emailData).subscribe(
      response => alert('Email sent successfully, open your mailbox'),
      error => console.error('Error sending email', error)
    );
  }
}
