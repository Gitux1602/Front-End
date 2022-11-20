import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AddEditProductComponent } from './pages/add-edit-product/add-edit-product.component';
import {HomeComponent} from './pages/home/home.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'edit/:id', component: AddEditProductComponent},
  {path: 'add', component: AddEditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
