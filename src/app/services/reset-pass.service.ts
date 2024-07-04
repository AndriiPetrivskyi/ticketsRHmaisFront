import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResetPassService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  sendEmail(data: any) {
    return this.httpClient.post('http://localhost:3000/resetPass/send-email', data);
  }

  changePass(data: any) {
    return this.httpClient.post('http://localhost:3000/resetPass/change-password', data)
    .subscribe((response: any) => {
      console.log('changePass response: ', response);
      this.router.navigate(['/login']);
    });
  }
}
