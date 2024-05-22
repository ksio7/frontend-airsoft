// src/app/components/producto-list/producto-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      console.log('Productos:', data); // Log the data to the console
      this.productos = data;
    }, error => {
      console.error('Error fetching productos:', error); // Log errors if any
    });
  }
}
