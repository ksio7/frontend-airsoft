import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCacheService {
  private productos: Producto[] = [];

  setProducts(productos: Producto[]): void {
    this.productos = productos;
  }

  getProducts(): Producto[] {
    return this.productos;
  }

  getProductsByCategoria(nombreCategoria: string): Producto[] {
    return this.productos.filter(producto => producto.subcategoria.categoria.nombre === nombreCategoria);
  }
}
