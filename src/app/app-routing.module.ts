import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {CategoryListComponent} from './components/category/category-list/category-list.component';
import {CategoryEditComponent} from './components/category/category-edit/category-edit.component';
import {CategoryCreateComponent} from './components/category/category-create/category-create.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
