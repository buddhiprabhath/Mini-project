/*import { WishlistService } from './../../../services/wishlist.service';
import { Product } from './../../../modals/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

productList: Product[] = []
wishlist: number[] = []

  constructor(private productService: ProductService, private wishlistService:WishlistService,private service:ProductListService ) { }

  ngOnInit(): void {
      this.loadProducts();
      this.loadWishlist();
      this.service.getImageDetailList();  
  }

loadProducts() {
  this.productService.getProducts().subscribe((products) => {
    this.productList = products;
   
  }
  ) 
}

  loadWishlist() {
    this.wishlistService.getwishlist().subscribe(productIds => {
      console.log(productIds)
      this.wishlist = productIds
    })
  }


}*/
