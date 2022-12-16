import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CartLine } from 'src/app/interfaces/cart-line';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  error: string = '';
  data: any;
  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {
    this.cartLines = storageService.getCartLines();
    this.orderDetail();
  }

  cartLines: CartLine[] = [];

  getTotal(): number {
    return this.getShipping() + this.getSubTotal();
  }

  getSubTotal(): number {
    return this.cartLines
    .map((x) => x.price * x.quantity)
    .reduce((a, v) => (a += v), 0);
  }

  getShipping(): number {
    return this.cartLines.map((x) => x.quantity).reduce((a, v) => (a += v), 0) * 2;
  }

  checkoutForm = new  FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    mobile_number: new FormControl('', [Validators.required]),
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip_code: new FormControl('', [Validators.required])
  });

  orderDetail(){
    const orderDetailArray: any[] = [];
    this.cartLines.forEach((p) => {
        orderDetailArray.push({
            "product_id": p.product._id,
            "price": p.price,
            "qty": p.quantity
        })
    })
    localStorage.setItem("orderDetail", JSON.stringify(orderDetailArray))
  }

  sendCheckOut() {
    if (this.checkoutForm.valid) {
      this.data = {
        shipping_info:{
          first_name: this.checkoutForm.get('first_name')?.value,
          last_name: this.checkoutForm.get('last_name')?.value,
          email: this.checkoutForm.get('email')?.value,
          mobile_number: this.checkoutForm.get('mobile_number')?.value,
          address1: this.checkoutForm.get('address1')?.value,
          address2: this.checkoutForm.get('address2')?.value,
          country: this.checkoutForm.get('country')?.value,
          city: this.checkoutForm.get('city')?.value,
          state: this.checkoutForm.get('state')?.value,
          zip_code: this.checkoutForm.get('zip_code')?.value,
        },
        sub_total_price: this.getSubTotal(),
        shipping: this.getShipping(),
        total_price: this.getTotal(),
        user_id: JSON.parse(localStorage.getItem('loginData') || '')._id,
        order_date: new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate(),
        order_details: JSON.parse(localStorage.getItem("orderDetail") || "")
      };
      console.log(this.data);
      this.authService.sendCheckOut(this.data).subscribe({
        next(data){
          console.log(data);
        }
      })
    }
  }
}
