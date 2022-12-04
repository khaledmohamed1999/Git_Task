import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HomeComponent } from './components/layouts/home/home.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { ShopComponent } from './components/layouts/shop/shop.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { StartsComponent } from './components/starts/starts.component';
import { DetailComponent } from './components/layouts/detail/detail.component';
import { CartComponent } from './components/layouts/cart/cart.component';
import { CheckoutComponent } from './components/layouts/checkout/checkout.component';
import { ContactComponent } from './components/layouts/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ShopComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductComponent,
    StartsComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
