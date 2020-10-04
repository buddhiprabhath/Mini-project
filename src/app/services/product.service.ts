import { productsUrl } from './../config/api';
import { Product } from './../modals/product';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

 

@Injectable({
  providedIn: 'root'
})
export class ProductService {


 /* products: Product[] = [
    new Product(1, 'product 1', 'A',200, 'assets/Images/7.jpg'),
    new Product(2, 'product 2', 'B',300, 'assets/Images/8.jpg'),
    new Product(3, 'product 3', 'C',400, 'assets/Images/9.jpg'),
    new Product(4, 'product 4', 'D',500, 'assets/Images/6.jpg'),
    new Product(5, 'product 5', 'E',600, 'assets/Images/11.jpg'),
    new Product(6, 'product 6', 'F',700, 'assets/Images/12.jpg'),
    new Product(7, 'product 7', 'F',800, 'assets/Images/3.jpg'),
  ]*/

  constructor(private http: HttpClient) { }
    
  getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(productsUrl);
  }



}
