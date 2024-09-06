import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { AuthToken } from '../models/auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:8080/auth';
  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem("token") !== null) {
      this.loggedInSubject.next(true);
    } else {
      this.loggedInSubject.next(false);
    }
  }

  login(user: User): Observable<AuthToken> {
    return this.httpClient.post<AuthToken>(`${this.url}/login`, user).pipe(
      tap((res: AuthToken) => {
        localStorage.setItem('token', res.token);
        this.loggedInSubject.next(true);
        return res;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  logout(): void {
    localStorage.removeItem("token");
    this.loggedInSubject.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }
}
