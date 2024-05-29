// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private usernameSubject = new BehaviorSubject<string | null>(null);

  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  getUsername$: Observable<string | null> = this.usernameSubject.asObservable();

  login(credentials: { username: string, password: string }): Observable<any> {
    // Simulate an API call
    return new Observable(observer => {
      // Fake a successful login response
      setTimeout(() => {
        this.isLoggedInSubject.next(true);
        this.usernameSubject.next(credentials.username);
        observer.next({ success: true });
        observer.complete();
      }, 1000);
    });
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
    this.usernameSubject.next(null);
  }
}
