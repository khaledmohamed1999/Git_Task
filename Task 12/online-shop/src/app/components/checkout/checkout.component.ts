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
  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {
    this.cartLines = storageService.getCartLines();
    this.orderDetail();
  }

  cartLines: CartLine[] = [];

  getTotal(): number {
    let total = this.getShipping() + this.getSubTotal()
    localStorage.setItem("total", total.toString())
    return total;
  }

  getSubTotal(): number {
    let subTotal = this.cartLines
    .map((x) => x.price * x.quantity)
    .reduce((a, v) => (a += v), 0);
    localStorage.setItem("subTotal", subTotal.toString())
    return subTotal
  }

  getShipping(): number {
    let shipping = this.cartLines.map((x) => x.quantity).reduce((a, v) => (a += v), 0) * 2
    localStorage.setItem("shipping", shipping.toString())
    return shipping;
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
    zip_code: new FormControl('', [Validators.required]),
    sub_total_price: new FormControl(Number(localStorage.getItem("subTotal"))),
    shipping: new FormControl(Number(localStorage.getItem("shipping"))),
    total_price: new FormControl(Number(localStorage.getItem("total"))),
    user_id: new FormControl(JSON.parse(localStorage.getItem('loginData') || '')._id),
    order_date: new FormControl(new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate()),
    order_details: new FormControl(JSON.parse(localStorage.getItem("orderDetail") || ""))
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
      this.error = '';
      this.authService.sendCheckOut(this.checkoutForm.value).subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (error: any) => {
          this.error = error?.error;
        },
        complete: () => {
          console.log('checked out');
        },
      });
    }
  }
}
