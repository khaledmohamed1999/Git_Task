import { product } from "./product";

export class cartLine{
    product: product;
    quantity: number;
    price: number;

    constructor(product: product, quantity: number, price: number){
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }
}