import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ListProductComponent} from './components/product/list-product/list-product.component';
import {CreateProductComponent} from './components/product/create-product/create-product.component';
import {UpdateProductComponent} from './components/product/update-product/update-product.component';
import {DetailsProductComponent} from './components/product/details-product/details-product.component';
import {UpdateCommenterComponent} from './components/commenter/update-commenter/update-commenter.component';
import {ListCommenterComponent} from './components/commenter/list-commenter/list-commenter.component';
import {CreateCommenterComponent} from './components/commenter/create-commenter/create-commenter.component';
import {DetailsCommenterComponent} from './components/commenter/details-commenter/details-commenter.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {SlideShowProductComponent} from './components/slide-show-product/slide-show-product.component';
import {DeleteProductComponent} from './components/product/delete-product/delete-product.component';
import { CategoryCreateComponent } from './components/admin/category/category-create/category-create.component';
import { CategoryEditComponent } from './components/admin/category/category-edit/category-edit.component';
import { CategoryListComponent } from './components/admin/category/category-list/category-list.component';
import { ListSizeComponent } from './components/admin/size/list-size/list-size.component';
import { DetailSizeComponent } from './components/admin/size/detail-size/detail-size.component';
import { UpdateSizeComponent } from './components/admin/size/update-size/update-size.component';
import { CreateSizeComponent } from './components/admin/size/create-size/create-size.component';
import { ListColorComponent } from './components/admin/color/list-color/list-color.component';
import { DetailColorComponent } from './components/admin/color/detail-color/detail-color.component';
import { UpdateColorComponent } from './components/admin/color/update-color/update-color.component';
import { CreateColorComponent } from './components/admin/color/create-color/create-color.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SupplierListComponent } from './components/admin/suppliers/supplier-list/supplier-list.component';
import { SupplierCreateComponent } from './components/admin/suppliers/supplier-create/supplier-create.component';
import { SupplierEditComponent } from './components/admin/suppliers/supplier-edit/supplier-edit.component';
import { ProductDetailCreateComponent } from './components/product-detail/product-detail-create/product-detail-create.component';
import { ProductDetailListComponent } from './components/product-detail/product-detail-list/product-detail-list.component';
import { ProductDetailEditComponent } from './components/product-detail/product-detail-edit/product-detail-edit.component';
import { CartComponent } from './components/cart/cart.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductSupplierComponent } from './components/product-supplier/product-supplier.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ActionProductComponent } from './components/product/action-product/action-product.component';
import { OrderManagerComponent } from './components/admin/order-manager/order-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DetailsProductComponent,
    UpdateCommenterComponent,
    ListCommenterComponent,
    CreateCommenterComponent,
    DetailsCommenterComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SlideShowProductComponent,
    DeleteProductComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryListComponent,
    ListSizeComponent,
    DetailSizeComponent,
    UpdateSizeComponent,
    CreateSizeComponent,
    ListColorComponent,
    DetailColorComponent,
    UpdateColorComponent,
    CreateColorComponent,
    HomeComponent,
    SupplierListComponent,
    SupplierCreateComponent,
    SupplierEditComponent,
    ProductDetailCreateComponent,
    ProductDetailListComponent,
    ProductDetailEditComponent,
    CartComponent,
    UserProfileComponent,
    ProductCategoryComponent,
    ProductSupplierComponent,
    CartListComponent,
    ActionProductComponent,
    OrderManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
