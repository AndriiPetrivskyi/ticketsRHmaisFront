import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ResetPassService {
  constructor(private httpClient: HttpClient) {}

  getResetPass() {
    return this.httpClient.get('http://localhost:3000/reset-pass', {
      observe: 'response',
    });
  }

  enviarEmail() {
    
  }
}
