import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './components/category/category-delete/category-delete.component';
import { CtegoryDeleteComponent } from './ctegory-delete/ctegory-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    CtegoryDeleteComponent
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
