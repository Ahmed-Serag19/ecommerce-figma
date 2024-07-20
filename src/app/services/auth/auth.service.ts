import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://ecommerce.routemisr.com';

  constructor(private http: HttpClient) {}

  register(user: object): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/v1/auth/signup`, user);
  }
}
