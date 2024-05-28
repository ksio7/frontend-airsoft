import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
=======
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< Updated upstream
  private apiUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) {}

  login(credentials: { direccionEmail: string; password: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/login`, credentials).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
=======
  private apiUrl = 'http://localhost:8080/api'; // Ensure this URL is correct
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.loggedIn.next(!!localStorage.getItem('authToken'));
  }

  login(loginData: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, loginData).pipe(
      tap(response => {
        // Store token and update login state
        localStorage.setItem('authToken', response.token);
        this.loggedIn.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.loggedIn.next(false);
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
>>>>>>> Stashed changes
  }
}
