import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {CategoryListComponent} from './components/category/category-list/category-list.component';
import {CategoryEditComponent} from './components/category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './components/category/category-delete/category-delete.component';
import {CategoryCreateComponent} from "./components/category/category-create/category-create.component";

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
  }, {
    path: 'category/:id/delete',
    component: CategoryDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
