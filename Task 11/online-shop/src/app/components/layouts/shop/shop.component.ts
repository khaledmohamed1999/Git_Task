import { Component, OnInit } from '@angular/core';
import { product } from '../../class/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products: product[] = [];
  filter: any = {
    prices: [{ min: 0, max: 0 }],
    sizes: [''],
    colors: [''],
  };

  pageNumber: number = 0;
  itemsPerPage: number = 2;

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.data;
    });
  }

  getFilteredProducts(): product[] {
    return this.products.filter(
      (p) => this.filterPrice(p) && this.filterSize(p) && this.filterColor(p)
    );
  }
  getProducts(): product[] {
    return this.getFilteredProducts().slice(
      this.pageNumber * this.itemsPerPage,
      this.pageNumber * this.itemsPerPage + this.itemsPerPage
    );
  }

  getTotalCount() {
    return this.getFilteredProducts().length;
  }
  filterChange(filter: any) {
    this.filter = filter;
  }

  filterPrice(p: product) {
    return (
      this.filter.prices.findIndex(
        (x: any) =>
          (x.min <= p.price && x.max >= p.price) || (x.min == 0 && x.max == 0)
      ) >= 0
    );
  }
  filterSize(p: product) {
    if (this.filter.sizes.includes('')) return true;
    return this.filter.sizes.includes(p.size);
  }
  filterColor(p: product) {
    if (this.filter.colors.includes('')) return true;
    return this.filter.colors.includes(p.color);
  }
  changePage(i: number) {
    this.pageNumber = i;
  }
}
