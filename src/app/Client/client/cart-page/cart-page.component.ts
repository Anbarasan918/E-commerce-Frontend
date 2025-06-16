import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(public commonService : CommonService) { }
 cartItems:any[] = [];
  ngOnInit(): void {
    this.commonService.retrieveCartDetails().subscribe((response :any)=>{
      this.cartItems=response.data.cartItems;
    })
  }


  get subtotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.total, 0);
  }

  get tax(): number {
    return 102.00;
  }

  get total(): number {
    return this.subtotal + this.tax;
  }

  increase(item: any) {
    item.quantity++;
    item.total = item.price * item.quantity;

    this.commonService.quantityAndPriceUpdation(item).subscribe((item : any) => {
            console.log(item.id);
    }
  )};

  decrease(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      item.total = item.price * item.quantity;

      this.commonService.quantityAndPriceUpdation(item).subscribe((item : any) => {
            console.log(item.id);
    }
  )}
  }

  remove(item: any) {
    this.cartItems = this.cartItems.filter(i => i !== item);
    this.commonService.deleteCartItemById(item.id).subscribe((item:any) =>{
      console.log(item.id);
    });
  }

}
