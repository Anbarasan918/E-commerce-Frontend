import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponentComponent } from './Client/login-page-component/login-page-component.component';
import { RegisterPageComponentComponent } from './Client/register-page-component/register-page-component.component';
import { HomePageComponent } from './Client/home-page/home-page.component';
import { OrderPageComponent } from './Client/client/order-page/order-page.component';
import { CartPageComponent } from './Client/client/cart-page/cart-page.component';
import { ProductListingComponent } from './Client/client/product-listing/product-listing.component';
import { ProductCreationComponent } from './Client/client/product-creation/product-creation.component';
import { CategoryCreationComponent } from './Client/client/category-creation/category-creation.component';

const routes: Routes = [
  { path: '', redirectTo: 'loginPage', pathMatch: 'full' },
  { path: 'loginPage', component: LoginPageComponentComponent },
  { path: 'registerPage', component: RegisterPageComponentComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: 'productLisingAndCreation', component: ProductListingComponent },
  { path: 'order', component: OrderPageComponent },
  { path: 'cart', component: CartPageComponent },
  // { path: 'productCreation', component: ProductCreationComponent },
  { path: 'categoryCreation', component: CategoryCreationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
