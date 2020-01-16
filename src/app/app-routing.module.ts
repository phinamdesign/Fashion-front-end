import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {ListProductComponent} from './components/product/list-product/list-product.component';
import {DeleteProductComponent} from './components/product/delete-product/delete-product.component';
import {CreateProductComponent} from './components/product/create-product/create-product.component';
import {CategoryCreateComponent} from './components/category/category-create/category-create.component';
import {CategoryEditComponent} from './components/category/category-edit/category-edit.component';
import {CategoryListComponent} from './components/category/category-list/category-list.component';
import {DetailsProductComponent} from './components/product/details-product/details-product.component';
import {ListOderDetailComponent} from './components/oderDetail/list-oder-detail/list-oder-detail.component';
import {DetailOderDetailComponent} from './components/oderDetail/detail-oder-detail/detail-oder-detail.component';
import { UpdateOderDetailComponent } from './components/oderDetail/update-oder-detail/update-oder-detail.component';
import {CreateOderDetailComponent} from './components/oderDetail/create-oder-detail/create-oder-detail.component';
import {ListSizeComponent} from './components/size/list-size/list-size.component';
import {DetailSizeComponent} from './components/size/detail-size/detail-size.component';
import {UpdateSizeComponent} from './components/size/update-size/update-size.component';
import {CreateSizeComponent} from './components/size/create-size/create-size.component';
import {SupplierListComponent} from './components/suppliers/supplier-list/supplier-list.component';
import {SupplierCreateComponent} from './components/suppliers/supplier-create/supplier-create.component';
import {SupplierEditComponent} from './components/suppliers/supplier-edit/supplier-edit.component';

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
  // oderdetails
  {path: 'oderdetails', component: ListOderDetailComponent},
  {path: 'oderdetails/:id', component: DetailOderDetailComponent},
  {path: 'update/:id', component: UpdateOderDetailComponent},
  {path: 'createoderdetails', component: CreateOderDetailComponent},
  // size
  {path: 'sizes', component: ListSizeComponent},
  {path: 'sizes/:id', component: DetailSizeComponent},
  {path: 'updatesizes/:id', component: UpdateSizeComponent},
  {path: 'createsizes', component: CreateSizeComponent},
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
