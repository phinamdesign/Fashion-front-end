import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {ListProductComponent} from './services/components/product/list-product/list-product.component';
import {DeleteProductComponent} from './services/components/product/delete-product/delete-product.component';
import {CreateProductComponent} from './services/components/product/create-product/create-product.component';
import {CategoryCreateComponent} from './services/components/category/category-create/category-create.component';
import {CategoryEditComponent} from './services/components/category/category-edit/category-edit.component';
import {CategoryListComponent} from './services/components/category/category-list/category-list.component';
import {DetailsProductComponent} from './services/components/product/details-product/details-product.component';
import {ListOderDetailComponent} from './services/components/oderDetail/list-oder-detail/list-oder-detail.component';
import {DetailOderDetailComponent} from './services/components/oderDetail/detail-oder-detail/detail-oder-detail.component';
import { UpdateOderDetailComponent } from './services/components/oderDetail/update-oder-detail/update-oder-detail.component';
import {CreateOderDetailComponent} from './services/components/oderDetail/create-oder-detail/create-oder-detail.component';
import {SupplierListComponent} from './services/components/suppliers/supplier-list/supplier-list.component';
import {SupplierCreateComponent} from './services/components/suppliers/supplier-create/supplier-create.component';
import {SupplierEditComponent} from './services/components/suppliers/supplier-edit/supplier-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'product', pathMatch: 'full'},
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
    path: 'details/:id',
    component: DetailsProductComponent
  },
  {
    path: 'delete-product',
    component: DeleteProductComponent
  },
  {
    path: 'create-product',
    component: CreateProductComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'categories',
    component: CategoryListComponent
  },
  {
    path: 'create/category',
    component: CategoryCreateComponent
  },
  {
    path: 'category/:id/edit',
    component: CategoryEditComponent
  },
  {path: 'oderdetails', component: ListOderDetailComponent},
  {path: 'details/:id', component: DetailOderDetailComponent},
  {path: 'update/:id', component: UpdateOderDetailComponent},
  {path: 'add', component: CreateOderDetailComponent},
  {
    path: 'suppliers',
    component: SupplierListComponent
  },
  {
    path: 'create/supplier',
    component: SupplierCreateComponent
  },
  {
    path: 'supplier/:id/edit',
    component: SupplierEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
