import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { product } from '../components/class/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartProducts: product[] = [];

  constructor(private httpClient: HttpClient) {}

  getFeaturedProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products/getFeatured`);
  }

  getProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products`);
  }

  getRecentProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products/getRecent`);
  }

  addProduct(product: product): void {
    this.cartProducts.push(product);
  }

  getProductById(id:string){
    return this.httpClient.get(`${environment.apiUrl}products/${id}`)
  }

  getProductByCategoryId(id:string){
    return this.httpClient.get(`${environment.apiUrl}products/getByCategoryId/${id}`);
  }
}
