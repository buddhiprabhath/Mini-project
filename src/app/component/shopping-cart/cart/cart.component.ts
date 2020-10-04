import { CartItem } from './../../../modals/cart-item';
import { CartService } from './../../../services/cart.service';
import { Product } from './../../../modals/product';
import { MassengerService } from './../../../services/massenger.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartItems =[
  //{id:1, productId:5,productName:'A',qty:3,price:100},
  //{id:2, productId:6,productName:'B',qty:8,price:200},
  //{id:3, productId:1,productName:'D',qty:9,price:300},
  //{id:4, productId:3,productName:'F',qty:2,price:400},
  
];

cartTotal =0

  constructor(private msg:MassengerService,private cartService:CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();



}

handleSubscription() {
this.msg.getMsg().subscribe((product:Product) => {
  this.loadCartItems();

})

}

loadCartItems(){
    this.cartService.getCartItems().subscribe((items:CartItem[] )=> {
      //console.log(items); 
      this.cartItems= items;
      this.calculateCartTotal();
    })
}

/*addProductToCart(product: Product ) {

  let productExists = false 
 
  for(let i in this.cartItems){
    if(this.cartItems[i].productId === product.id){
      this.cartItems[i].qty++
      productExists = true
      break;
    }
  }



  if(!productExists){
    this.cartItems.push({
      productId: product.id,
      productName: product.name,
      qty:1,
      price: product.price
    })
  }




    /*if(this.cartItems.length===0){
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty:1,
        price: product.price
      })
    }else{
      for(let i in this.cartItems){
        if(this.cartItems[i].productId === product.id){
          this. cartItems[i].qty++
          break;
        }else{
          this.cartItems.push({
            productId: product.id,
            productName: product.name,
            qty:1,
            price: product.price
          })
      
        }
      }

    }
*/





  
  
  
  
 //  this.calculateCartTotal();
 //  }

  calculateCartTotal(){
    this.cartTotal=0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
