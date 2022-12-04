import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      productName: "Product1",
      imageUrl: "/assets/img/product-1.jpg",
      price: 150,
      discount: 0.1,
      rating: 3.5,
      ratingCount: 50,
    },
    {
      productName: "Product2",
      imageUrl: "/assets/img/product-2.jpg",
      price: 120,
      discount: 0.1,
      rating: 5,
      ratingCount: 50,
    },
    {
      productName: "Product3",
      imageUrl: "/assets/img/product-3.jpg",
      price: 100,
      discount: 0.1,
      rating: 1.5,
      ratingCount: 50,
    },
    {
      productName: "Product4",
      imageUrl: "/assets/img/product-4.jpg",
      price: 200,
      discount: 0.1,
      rating: 4,
      ratingCount: 50,
    },
  ]
}
