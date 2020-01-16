import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ListProductComponent} from './services/components/product/list-product/list-product.component';
import {CreateProductComponent} from './services/components/product/create-product/create-product.component';
import {UpdateProductComponent} from './services/components/product/update-product/update-product.component';
import {DetailsProductComponent} from './services/components/product/details-product/details-product.component';
import {ListOderComponent} from './services/components/oder/list-oder/list-oder.component';
import {DetailsOderComponent} from './services/components/oder/details-oder/details-oder.component';
import {CreateOderComponent} from './services/components/oder/create-oder/create-oder.component';
import {UpdateOderComponent} from './services/components/oder/update-oder/update-oder.component';
import {UpdateCommenterComponent} from './services/components/commenter/update-commenter/update-commenter.component';
import {ListCommenterComponent} from './services/components/commenter/list-commenter/list-commenter.component';
import {CreateCommenterComponent} from './services/components/commenter/create-commenter/create-commenter.component';
import {DetailsCommenterComponent} from './services/components/commenter/details-commenter/details-commenter.component';
import {FooterComponent} from './services/components/footer/footer.component';
import {HeaderComponent} from './services/components/header/header.component';
import {HomeComponent} from './services/components/home/home.component';
import {SlideShowProductComponent} from './services/components/slide-show-product/slide-show-product.component';
import {DeleteProductComponent} from './services/components/product/delete-product/delete-product.component';
import { CategoryCreateComponent } from './services/components/category/category-create/category-create.component';
import { CategoryEditComponent } from './services/components/category/category-edit/category-edit.component';
import { CategoryListComponent } from './services/components/category/category-list/category-list.component';
import {ListOderDetailComponent} from './services/components/oderDetail/list-oder-detail/list-oder-detail.component';
import {DetailOderDetailComponent} from './services/components/oderDetail/detail-oder-detail/detail-oder-detail.component';
import { UpdateOderDetailComponent } from './services/components/oderDetail/update-oder-detail/update-oder-detail.component';
import {CreateOderDetailComponent} from './services/components/oderDetail/create-oder-detail/create-oder-detail.component';
import { SupplierListComponent } from './services/components/suppliers/supplier-list/supplier-list.component';
import { SupplierCreateComponent } from './services/components/suppliers/supplier-create/supplier-create.component';
import { SupplierEditComponent } from './services/components/suppliers/supplier-edit/supplier-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DetailsProductComponent,
    ListOderComponent,
    DetailsOderComponent,
    CreateOderComponent,
    UpdateOderComponent,
    UpdateCommenterComponent,
    ListCommenterComponent,
    CreateCommenterComponent,
    DetailsCommenterComponent,
    FooterComponent,
    HeaderComponent,
    SlideShowProductComponent,
    DeleteProductComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryListComponent,
    ListOderDetailComponent,
    DetailOderDetailComponent,
    UpdateOderDetailComponent,
    CreateOderDetailComponent,
    HomeComponent,
    SupplierListComponent,
    SupplierCreateComponent,
    SupplierEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
