import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ResetPassService } from '../../services/reset-pass.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {
  token: string | null = null;

  resetPassForm = new FormGroup({
    password: new FormControl(''),
    ConfirmPass: new FormControl(''),
  });

  constructor(
    private resetPassService: ResetPassService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  resetPass() {
    const password = this.resetPassForm.get('password')?.value as string;
    const ConfirmPass = this.resetPassForm.get('ConfirmPass')?.value as string;

    if (this.token && password === ConfirmPass) {
      this.resetPassService.changePass(this.token, password);
    }
  }
}
