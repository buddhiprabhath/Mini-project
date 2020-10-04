import { HttpClient } from '@angular/common/http';
import { WishListUrl } from './../config/api';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/Operators'


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

 getwishlist() {
    return this.http.get(WishListUrl).pipe(
      map((result: any) => {
          let productIds = []

          result.forEach(item => productIds.push(item.id))
          return productIds;
      })
    )
      }
    
 

 addTowishlist(productId) {
    return this.http.post(WishListUrl, {id: productId});
 }

 removeFromwishlist(productId) {
    return this.http.delete(WishListUrl + "/" + productId);    
 }



}
