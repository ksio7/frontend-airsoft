import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle error appropriately
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
