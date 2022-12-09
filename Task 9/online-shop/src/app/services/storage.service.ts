import { Injectable } from '@angular/core';
import { CartLine } from '../interfaces/cart-line';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  addProducts(product: Product, quantity: number) {
    //Add product to localstorage as flat products (array of products not cartLines)
  }

  getCartLines(): CartLine[] {
    //Convert Array of products into cart lines array and return it
    return [];
  }
}
