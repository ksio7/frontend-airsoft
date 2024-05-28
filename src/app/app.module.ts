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
<<<<<<< Updated upstream
import { MatGridListModule } from '@angular/material/grid-list';
=======
<<<<<<< Updated upstream
import { MatPaginatorModule } from '@angular/material/paginator';
import { ImageService } from './services/image.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedService } from './services/shared.service';

>>>>>>> Stashed changes

const appRoutes: Routes = [
  { path: 'productos', component: ProductoListComponent },
<<<<<<< Updated upstream
  { path: 'fabricantes', component: FabricanteListComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' } // Default route
=======
  { path: 'login', component: LoginComponent },
  { path: 'categoria', component: CategoriaListComponent },
  { path: 'categoria/:nombreCategoria', component: ProductosByCategoriaComponent },
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/index' } // Fallback route for undefined paths
=======
<<<<<<< Updated upstream
import { MatGridListModule } from '@angular/material/grid-list';
=======
import { MatPaginatorModule } from '@angular/material/paginator';
import { ImageService } from './services/image.service';
import { SharedService } from './services/shared.service';
import { SubcategoriaComponent } from './components/subcategoria/subcategoria.component';
import { NavbarComponent } from './components/navbar/navbar.component';

>>>>>>> Stashed changes

const appRoutes: Routes = [
  { path: 'productos', component: ProductoListComponent },
<<<<<<< Updated upstream
  { path: 'fabricantes', component: FabricanteListComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' } // Default route
=======
  { path: 'login', component: LoginComponent },
  { path: 'categoria', component: CategoriaListComponent },
  { path: 'subcategoria/:nombreSubcategoria', component: SubcategoriaComponent },
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/index' } // Fallback route for undefined paths
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
];

@NgModule({
  declarations: [
    AppComponent,
    ProductoListComponent,
    FabricanteListComponent,
<<<<<<< Updated upstream
    // Add other components here
=======
<<<<<<< Updated upstream
    IndexComponent,
    NavbarComponent
=======
<<<<<<< Updated upstream
    // Add other components here
=======
    IndexComponent,
    SubcategoriaComponent,
    NavbarComponent
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
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
