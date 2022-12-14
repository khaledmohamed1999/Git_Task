import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cartLine } from '../class/cartLine';
import { StorageService } from 'src/app/services/storage.service';
import { cart } from '../class/cart';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css'],
})
export class CartTableComponent {

  constructor(private storageService:StorageService){

  }

  @Input() cartLines: cartLine[] = [];
  @Output() limitAlert = new EventEmitter<string>();

  incQuantity(i: number) {
    let cartObj = new cart(this.cartLines);
    cartObj.incQuantity(i);
  }

  decQuantity(i: number) {
    let cartObj = new cart(this.cartLines);
    cartObj.decQuantity(i);
  }

  remove(i: number) {
    let cartObj = new cart(this.cartLines);
    cartObj.remove(i);
  }
}
