import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AddReportService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  createReport(subType: string, title: string, body: string, type: string) {
    this.httpClient
      .post('http://localhost:3000/addReport/addReport', {
        subType,
        title,
        body,
        type,
      })
      .subscribe((response: any) => {
        console.log('addReport response: ', response);
        this.router.navigate(['/tickets']);
      });
  }
}
