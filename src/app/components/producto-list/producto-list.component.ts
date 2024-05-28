// src/app/components/producto-list/producto-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
import { ProductCacheService } from '../../services/product-cache.service';
=======
<<<<<<< Updated upstream
=======
import { ProductCacheService } from '../../services/product-cache.service';
import { SharedService } from '../../services/shared.service';
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [];
<<<<<<< Updated upstream

  constructor(private productoService: ProductoService) { }
=======
<<<<<<< Updated upstream
  paginatedProducts: Producto[] = [];
  categories: string[] = []; // Array to store unique categories
  pageSize = 5;
  currentPage = 0;

  constructor(
    private productoService: ProductoService,
    private productCacheService: ProductCacheService
  ) { }
=======
<<<<<<< Updated upstream

  constructor(private productoService: ProductoService) { }
=======
  paginatedProducts: Producto[] = [];
  subcategories: string[] = [];
  pageSize = 5;
  currentPage = 0;

  constructor(
    private productoService: ProductoService,
    private productCacheService: ProductCacheService,
    private sharedService: SharedService
  ) { }
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      console.log('Productos:', data); // Log the data to the console
      this.productos = data;
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
      this.extractCategories();
      this.paginate();
      this.productCacheService.setProducts(data);
      console.log('Fetched products:', data); // Add this line for debugging
=======
<<<<<<< Updated upstream
=======
      this.paginate();
      this.productCacheService.setProducts(data);
      this.sharedService.setProductos(data); // Store products and subcategories in shared service
      console.log('Fetched products:', data); // Debugging: log all fetched products
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
    }, error => {
      console.error('Error fetching productos:', error); // Log errors if any
    });
  }
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
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
=======
  formatFileName(nombre: string): string {
    return nombre.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
  }
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
}
