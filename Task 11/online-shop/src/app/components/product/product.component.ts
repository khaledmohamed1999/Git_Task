import { Component, Input } from '@angular/core';
import { product } from '../class/product';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: '.app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: product = {} as product;

  constructor(private storageService: StorageService) {}
  addProductToCart() {
    this.storageService.addProducts(this.product, 1);
  }
}
