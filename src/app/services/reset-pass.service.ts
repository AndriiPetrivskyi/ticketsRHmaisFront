import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResetPassService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  changePass(token: string, password: string) {
    return this.httpClient.post('http://localhost:3000/resetPass/reset-password/:token', { token, password }).subscribe(() => {
      alert('Password has been reset');
      this.router.navigate(['/login']);
    });
  }

  resetPassRequest(email: string) {
    return this.httpClient.post('http://localhost:3000/resetPass/request-reset-password', { email });
  }
}
