import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://api.example.com/auth';

  constructor(private _HttpClient: HttpClient) {}
  register(user: object): Observable<any> {
    return this._HttpClient.post(`${this.apiUrl}/register`, user);
  }
}
