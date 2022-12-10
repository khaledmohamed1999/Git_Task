import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartProducts: Product[] = [];
  likedProducts: Product[] = [];

  constructor(private httpClient: HttpClient) {
    this.likedProducts.length = Number(localStorage.getItem("likedProductsAmount"))
    this.cartProducts.length = Number(localStorage.getItem("cartProductsAmount"))
  }

  getFeaturedProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products/getFeatured`);
  }

  getProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products`);
  }

  getRecentProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products/getRecent`);
  }

  addProduct(product: Product): void {
    this.cartProducts.push(product);
    localStorage.setItem("cartProductsAmount", String(this.cartProducts.length))
  }

  getProductById(id:string){
    return this.httpClient.get(`${environment.apiUrl}products/${id}`)
  }

  getProductByCategoryId(id:string){
    return this.httpClient.get(`${environment.apiUrl}products/getByCategoryId/${id}`);
  }

  addLikedProduct(product: Product): void {
    this.likedProducts.push(product);
    localStorage.setItem("likedProductsAmount", String(this.likedProducts.length))
  }
}
