import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {ListProductComponent} from './components/product/list-product/list-product.component';
import {DeleteProductComponent} from './components/product/delete-product/delete-product.component';
import {CreateProductComponent} from './components/product/create-product/create-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'product',
    component: ListProductComponent
  },
  {
    path: 'delete-product',
    component: DeleteProductComponent
  },
  {
    path: 'create-product',
    component: CreateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
