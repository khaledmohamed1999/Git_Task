import { Injectable } from '@angular/core';
import { CartLine } from '../interfaces/cart-line';
import { Product } from '../interfaces/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  products: Product[] = [];
  productQuantity: Number[] = [];
  cartProducts: CartLine[] = [];
  constructor() {}

  addProducts(product: Product, quantity: number) {
    //Add product to localstorage as flat products (array of products not cartLines)
    this.products.push(product);
    this.productQuantity.push(quantity);
    localStorage.setItem("serviceCartProduct",JSON.stringify(this.products));
    localStorage.setItem("serviceCartProductQty",JSON.stringify(this.productQuantity));
  }

  getCartLines(): CartLine[] {
    //Convert Array of products into cart lines array and return it
    let serviceCartProduct = localStorage.getItem("serviceCartProduct")
    let serviceCartProductQty = localStorage.getItem("serviceCartProductQty")
    if(serviceCartProduct != null && serviceCartProductQty != null){
      let serviceCartProductArray: Product[] = JSON.parse(serviceCartProduct);
      let serviceCartProductQtyArray = JSON.parse(serviceCartProductQty)
      let cartLine: CartLine[] = []
      for(let i = 0; i < serviceCartProductArray.length; i++){
        let cartItem: CartLine = {
          product: serviceCartProductArray[i],
          quantity: Number(serviceCartProductQty[i]),
          price: serviceCartProductArray[i].price * Number(serviceCartProductQty[i])
        }
        this.cartProducts.push(cartItem)
      }
      return this.cartProducts
    }
    else{
      return [];
    }
  }
}
