import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {ListProductComponent} from './components/product/list-product/list-product.component';
import {DeleteProductComponent} from './components/product/delete-product/delete-product.component';
import {CreateProductComponent} from './components/product/create-product/create-product.component';
import {CategoryCreateComponent} from './components/admin/category/category-create/category-create.component';
import {CategoryEditComponent} from './components/admin/category/category-edit/category-edit.component';
import {CategoryListComponent} from './components/admin/category/category-list/category-list.component';
import {DetailsProductComponent} from './components/product/details-product/details-product.component';
import {ListSizeComponent} from './components/admin/size/list-size/list-size.component';
import {DetailSizeComponent} from './components/admin/size/detail-size/detail-size.component';
import {UpdateSizeComponent} from './components/admin/size/update-size/update-size.component';
import {CreateSizeComponent} from './components/admin/size/create-size/create-size.component';
import {SupplierListComponent} from './components/admin/suppliers/supplier-list/supplier-list.component';
import {SupplierCreateComponent} from './components/admin/suppliers/supplier-create/supplier-create.component';
import {SupplierEditComponent} from './components/admin/suppliers/supplier-edit/supplier-edit.component';
import {CartComponent} from './components/cart/cart.component';
import {UserProfileComponent} from './auth/user-profile/user-profile.component';
import {ProductCategoryComponent} from './components/product-category/product-category.component';
import {ProductSupplierComponent} from './components/product-supplier/product-supplier.component';
import {CartListComponent} from './components/cart-list/cart-list.component';
import {ListColorComponent} from './components/admin/color/list-color/list-color.component';
import {CreateColorComponent} from './components/admin/color/create-color/create-color.component';
import {UpdateColorComponent} from './components/admin/color/update-color/update-color.component';
import {DetailColorComponent} from './components/admin/color/detail-color/detail-color.component';
import {ActionProductComponent} from './components/product/action-product/action-product.component';
import {OrderManagerComponent} from './components/admin/order-manager/order-manager.component';
import {OrderUserComponent} from './components/order-user/order-user.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';

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
    path: 'action-product',
    component: ActionProductComponent
  },
  {
    path: 'create-product',
    component: CreateProductComponent
  },
  {
    path: 'product-supplier/:id',
    component: ProductSupplierComponent
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
  {
    path: 'product-category/:id',
    component: ProductCategoryComponent
  },
  // size
  {path: 'sizes', component: ListSizeComponent},
  {path: 'sizes/:id', component: DetailSizeComponent},
  {path: 'update-sizes/:id', component: UpdateSizeComponent},
  {path: 'create-sizes', component: CreateSizeComponent},
  {path: 'colors', component: ListColorComponent},
  {path: 'create-colors', component: CreateColorComponent},
  {path: 'update-colors/:id', component: UpdateColorComponent},
  {path: 'colors/:id', component: DetailColorComponent},
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
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'cart-list',
    component: CartListComponent
  },
  {
    path: 'order/admin/manager',
    component: OrderManagerComponent
  },
  {
    path: 'order/user/manager',
    component: OrderUserComponent
  },
  {
    path: 'order-detail/:id',
    component: OrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
