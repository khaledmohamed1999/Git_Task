import { Component } from '@angular/core';
import { cartLine } from '../../class/cartLine';
import { StorageService } from 'src/app/services/storage.service';
import { cart } from '../../class/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private storageService: StorageService,) {
    this.cartLines = storageService.getCartLines();
    this.cart = new cart(this.cartLines)
  }
  cartLines: cartLine[] = [];
  cart:cart;

  _getTotal(): number {
    return this.cart.getShipping() + this.cart.getSubTotal();
  }
  _getSubTotal(): number {
    return this.cart.getSubTotal();
  }
  _getShipping(): number {
    return this.cart.getShipping();
  }
}
