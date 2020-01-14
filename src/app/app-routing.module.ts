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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
