import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponentComponent } from '../login-page-component/login-page-component.component';
import { RegisterPageComponentComponent } from '../register-page-component/register-page-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { OrderPageComponent } from './order-page/order-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { CategoryCreationComponent } from './category-creation/category-creation.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { MatIconModule } from '@angular/material/icon';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    LoginPageComponentComponent,
    RegisterPageComponentComponent,
    HomePageComponent,
    ProductListingComponent,
    OrderPageComponent,
    CartPageComponent,
    ProductListingComponent,
    ProductCreationComponent,
    CategoryCreationComponent,
    CategoryListingComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class ClientModule { }
