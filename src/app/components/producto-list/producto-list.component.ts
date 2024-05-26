import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ProductCacheService } from '../../services/product-cache.service';
import { Producto } from '../../models/producto.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [];
  paginatedProducts: Producto[] = [];
  categories: string[] = []; // Array to store unique categories
  pageSize = 5;
  currentPage = 0;

  constructor(
    private productoService: ProductoService,
    private productCacheService: ProductCacheService
  ) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
      this.extractCategories();
      this.paginate();
      this.productCacheService.setProducts(data);
      console.log('Fetched products:', data); // Add this line for debugging
    }, error => {
      console.error('Error fetching products:', error);
    });
  }

  handlePageEvent(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.paginate();
  }

  paginate(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.productos.slice(startIndex, endIndex);
  }

  extractCategories(): void {
    const categorySet = new Set<string>();
    this.productos.forEach(product => {
      categorySet.add(product.subcategoria.categoria.nombre);
    });
    this.categories = Array.from(categorySet);
  }

  formatFileName(nombre: string): string {
    return nombre.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
  }
}
