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
import {ListOderComponent} from './components/oder/list-oder/list-oder.component';
import {DetailsOderComponent} from './components/oder/details-oder/details-oder.component';
import {CreateOderComponent} from './components/oder/create-oder/create-oder.component';
import {UpdateOderComponent} from './components/oder/update-oder/update-oder.component';
import {UpdateCommenterComponent} from './components/commenter/update-commenter/update-commenter.component';
import {ListCommenterComponent} from './components/commenter/list-commenter/list-commenter.component';
import {CreateCommenterComponent} from './components/commenter/create-commenter/create-commenter.component';
import {DetailsCommenterComponent} from './components/commenter/details-commenter/details-commenter.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {SlideShowProductComponent} from './components/slide-show-product/slide-show-product.component';
import {DeleteProductComponent} from './components/product/delete-product/delete-product.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import {ListOderDetailComponent} from './components/oderDetail/list-oder-detail/list-oder-detail.component';
import {DetailOderDetailComponent} from './components/oderDetail/detail-oder-detail/detail-oder-detail.component';
import { UpdateOderDetailComponent } from './components/oderDetail/update-oder-detail/update-oder-detail.component';
import {CreateOderDetailComponent} from './components/oderDetail/create-oder-detail/create-oder-detail.component';

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
    HomeComponent,
    SlideShowProductComponent,
    DeleteProductComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryListComponent,
    ListOderDetailComponent,
    DetailOderDetailComponent,
    UpdateOderDetailComponent,
    CreateOderDetailComponent
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
