import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ProductCacheService } from '../../services/product-cache.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService, private productCacheService: ProductCacheService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
      this.productCacheService.setProducts(data);
      console.log('Fetched products:', data); // Add this line for debugging
    }, error => {
      console.error('Error fetching products:', error);
    });
  }
}
