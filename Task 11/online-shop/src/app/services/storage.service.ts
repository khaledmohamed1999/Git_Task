import { Injectable } from '@angular/core';
import { cartLine } from '../components/class/cartLine';
import { product } from '../components/class/product';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getProductsFromLocalStorage(): product[] {
    return JSON.parse(localStorage.getItem('products') || '[]');
  }
  addProducts(product: product, quantity: number) {
    const products: product[] = this.getProductsFromLocalStorage();
    for (let i = 0; i < quantity; i++) {
      products.push(product);
    }
    localStorage.setItem('products', JSON.stringify(products));
  }

  getCartLines(): cartLine[] {
    const products: product[] = this.getProductsFromLocalStorage();
    const cartLines: cartLine[] = [];
    products.forEach((p) => {
      const ix = cartLines.findIndex((x) => x.product.id === p.id);
      if (ix >= 0) {
        cartLines[ix].quantity += 1;
      } else {
        cartLines.push({
          price: p.price,
          product: p,
          quantity: 1,
        });
      }
    });
    return cartLines;
  }
  save(cartLines: cartLine[]) {
    const products: product[] = [];
    cartLines.forEach((c) => {
      for (let i = 0; i < c.quantity; i++) {
        products.push(c.product);
      }
    });
    localStorage.setItem('products', JSON.stringify(products));
  }

  getQuantity(): number {
    const products = this.getProductsFromLocalStorage();
    return products?.length || 0;
  }
}
