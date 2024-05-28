import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { SubcategoriaComponent } from './components/subcategoria/subcategoria.component';
import { IndexComponent } from './components/index/index.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { FabricanteListComponent } from './components/fabricante-list/fabricante-list.component';
import { ProductResolverService } from './services/product-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: { products: ProductResolverService }
  },
  {
    path: 'login',
    component: LoginComponent,
    resolve: { products: ProductResolverService }
  },
  {
    path: 'categoria',
    component: CategoriaListComponent,
    resolve: { products: ProductResolverService }
  },
  {
    path: 'categoria/:nombreCategoria',
    component: CategoriaListComponent,
    resolve: { products: ProductResolverService }
  },
  {
    path: 'subcategoria/:nombreSubcategoria',
    component: SubcategoriaComponent,
    resolve: { products: ProductResolverService }
  },
  {
    path: 'products',
    component: ProductoListComponent,
    resolve: { products: ProductResolverService }
  },
  {
    path: 'fabricantes',
    component: FabricanteListComponent,
    resolve: { products: ProductResolverService }
  },
  {
    path: 'index',
    component: IndexComponent,
    resolve: { products: ProductResolverService }
  },
  {
    path: '**',
    redirectTo: '/index'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
