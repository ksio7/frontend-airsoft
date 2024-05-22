// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { FabricanteListComponent } from './components/fabricante-list/fabricante-list.component';
import { ProductoService } from './services/producto.service';
import { FabricanteService } from './services/fabricante.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

const appRoutes: Routes = [
  { path: 'productos', component: ProductoListComponent },
  { path: 'fabricantes', component: FabricanteListComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' } // Default route
];

@NgModule({
  declarations: [
    AppComponent,
    ProductoListComponent,
    FabricanteListComponent,
    // Add other components here
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [ProductoService, FabricanteService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
