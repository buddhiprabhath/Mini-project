import { AngularFireDatabaseModule,AngularFireList } from '@angular/fire/database';
import { firebase } from './../../environments/firebase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
imageDetaillList: AngularFireList<any>;

  constructor(private firebase:AngularFireDatabaseModule) { }

  getImageDetailList() {
  //  this.imageDetaillList = this.firebase.list("productDetails");
  }


insertProductDetails(productDetails){
  this.imageDetaillList.push(productDetails);
}


}
