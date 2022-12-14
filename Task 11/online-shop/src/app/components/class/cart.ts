import { StorageService } from "src/app/services/storage.service";
import { cartLine } from "./cartLine";
import { product } from "./product";

export class cart{
    cartLineArray: cartLine[];
    storageService: StorageService;
    
    constructor(cartLineArray: cartLine[]){
        this.cartLineArray = cartLineArray;
        this.storageService = new StorageService();
    }

    getShipping(): number{
        return this.cartLineArray.length * 10;
    }

    getSubTotal(): number{
        let subTotal = 0;
        this.cartLineArray.forEach(cartLine => {
            subTotal += cartLine.price * cartLine.quantity;
        });
        return subTotal;
    }

    getTotal(): number{ return this.getShipping() + this.getSubTotal(); }

    incQuantity(index: number){
        console.log(this.cartLineArray[index]);
        this.cartLineArray[index].quantity += 1;
        this.storageService.save(this.cartLineArray);
    }

    decQuantity(index: number){
        if(this.cartLineArray[index].quantity > 1){
            this.cartLineArray[index].quantity -= 1;
            this.storageService.save(this.cartLineArray);
        }
    }

    remove(index: number){
        this.cartLineArray.splice(index,1);
        this.storageService.save(this.cartLineArray);
    }
}