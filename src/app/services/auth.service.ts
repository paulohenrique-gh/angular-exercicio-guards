import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthToken } from '../models/auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:8080/auth';

  constructor(private httpClient: HttpClient) {}

  login(user: User): Observable<AuthToken> {
    return this.httpClient.post<AuthToken>(`${this.url}/login`, user).pipe(
      tap((res: AuthToken) => {
        localStorage.setItem('token', res.token);
        return res;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
