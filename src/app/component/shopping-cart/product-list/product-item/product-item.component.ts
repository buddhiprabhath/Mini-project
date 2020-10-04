/*import { ProductListService } from './../../../../services/product-list.service';
import { WishlistService } from './../../../../services/wishlist.service';
import { CartService } from './../../../../services/cart.service';
import { MassengerService } from './../../../../services/massenger.service';
import { Product } from './../../../../modals/product';
import { Component, OnInit,Input } from '@angular/core';
import { trigger, transition,style,animate } from '@angular/animations';

 
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  animations: [
    trigger('fade',[
        transition('void => *', [
          style({backgroundColor: 'yellow', opacity: 0}),
          animate(1000, style({backgroundColor: 'white', opacity: 1}))
        ])
    ])
  ]
})
export class ProductItemComponent implements OnInit {

@Input() productItem: Product
addedTowishlist: boolean = false;

  constructor(private msg:MassengerService,private cartService:CartService,
    private WishlistService: WishlistService,
    private service:ProductListService
    ) { }

  ngOnInit(): void {
                                                                                                                                                                                                                                                                                                                                                                                                 
  };

 

  
  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(()=> {
      this.msg.sendMsg(this.productItem)
    })
    
  }

  handleAddTowishlist(){
    this.WishlistService.addTowishlist(this.productItem.id).subscribe(() => {
      this.addedTowishlist= true;
    })
  }

  handleRemoveFromwishlist(){
      this.WishlistService.removeFromwishlist(this.productItem.id).subscribe(() =>{
        this.addedTowishlist=false;
      })
  }

}*/
