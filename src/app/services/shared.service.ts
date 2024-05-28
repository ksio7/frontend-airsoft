import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
<<<<<<< Updated upstream
=======
import { Producto } from '../models/producto.model';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
export class SharedService {
<<<<<<< Updated upstream
  private categoriesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public categories$: Observable<string[]> = this.categoriesSubject.asObservable();

  setCategories(categories: string[]): void {
    this.categoriesSubject.next(categories);
=======
  private productosSubject: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);
  public productos$: Observable<Producto[]> = this.productosSubject.asObservable();

  private subcategoriesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public subcategories$: Observable<string[]> = this.subcategoriesSubject.asObservable();

  setProductos(productos: Producto[]): void {
    this.productosSubject.next(productos);
    this.extractSubcategories(productos);
  }

  setSubcategories(subcategories: string[]): void {
    this.subcategoriesSubject.next(subcategories);
  }

  private extractSubcategories(productos: Producto[]): void {
    const subcategorySet = new Set<string>();
    productos.forEach(product => {
      subcategorySet.add(product.subcategoria.nombre);
    });
    this.setSubcategories(Array.from(subcategorySet));
>>>>>>> Stashed changes
  }
}
