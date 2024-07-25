import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  removeToken(): void {
    localStorage.removeItem('jwtToken');
  }

  getDecodedToken(): any {
    const token = this.getToken();
    if (token) {
      return jwtDecode(token);
    }
    return null;
  }

  login(id: string, password: string) {
    return this.httpClient.post<any>('http://localhost:3000/auth/login', { id, password })
      .pipe(
        map(response => {
          if (response.token) {
            this.setToken(response.token);
            this.router.navigate(['/']);
          }
        return response;
      }),
    );
  }

  logout() {
    this.removeToken();
    this.router.navigate(['/login']);
  }
}
