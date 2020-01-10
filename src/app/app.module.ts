import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { DetailsProductComponent } from './components/product/details-product/details-product.component';
import { ListOderComponent } from './components/oder/list-oder/list-oder.component';
import { DetailsOderComponent } from './components/oder/details-oder/details-oder.component';
import { CreateOderComponent } from './components/oder/create-oder/create-oder.component';
import { UpdateOderComponent } from './components/oder/update-oder/update-oder.component';
import { UpdateCommenterComponent } from './components/commenter/update-commenter/update-commenter.component';
import { ListCommenterComponent } from './components/commenter/list-commenter/list-commenter.component';
import { CreateCommenterComponent } from './components/commenter/create-commenter/create-commenter.component';
import { DetailsCommenterComponent } from './components/commenter/details-commenter/details-commenter.component';

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
