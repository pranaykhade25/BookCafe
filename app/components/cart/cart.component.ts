import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products : any = [];
  grandTotal !: number;
  constructor(private cartApi : CartapiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.products = res;
      
      this.grandTotal = this.cartApi.getTotalPrice();
    })
  }
  removeProduct(item:any){
    this.cartApi.removeCartData(item);
  }
  removeAllProduct(){
    this.cartApi.removeAllData();
  }



}
