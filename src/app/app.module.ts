import { FirebaseService } from './services/firebase.service';
import { MassengerService } from './services/massenger.service';
//import { ProductListComponent } from './component/shopping-cart/product-list/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './component/shared/header/header.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
//import { FiltesComponent } from './component/Shopping-cart/filtes/filtes.component';
//import { ProductListComponent } from './component/Shopping-cart/product-list/product-list.component';
import { CartComponent } from './component/shopping-cart/cart/cart.component';
import { FilterComponent } from './component/shopping-cart/filter/filter.component';
import { CartItemComponent } from './component/shopping-cart/cart/cart-item/cart-item.component';
//import { ProductItemComponent } from './component/shopping-cart/product-list/product-item/product-item.component';
//import { CartComponent } from './component/Shopping-cart/cart/cart.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './component/shared/header/login/login.component';
import { RegisterComponent } from './component/shared/header/register/register.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {firebase} from '../environments/firebase';
//import { AlertComponent } from './component/alert/alert.component';
import {MatTreeModule} from '@angular/material/tree';
import {AngularFireStorageModule} from '@angular/fire/storage'
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { ImagesComponent } from './component/images/images.component';
import { ImageComponent } from './component/images/image/image.component';
import { ImageListComponent } from './component/images/image-list/image-list.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ShoppingCartComponent,
    //FiltesComponent,
   //ProductListComponent,
    CartComponent,
    FilterComponent,
   // CartComponent
  // ProductListComponent,
   CartItemComponent,
   //ProductItemComponent,
   
   LoginComponent,
   RegisterComponent,
   HomeComponent,
   ImagesComponent,
   ImageComponent,
   ImageListComponent,
   //AlertComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatTreeModule,
    ReactiveFormsModule ,
    //AngularFireModule.initializeApp( environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyDCskQkVS4SD_JhHm11fF6iPrV-Vd0J_GE",
      authDomain: "shopping-cart-660b4.firebaseapp.com",
      databaseURL: "https://shopping-cart-660b4.firebaseio.com",
      projectId: "shopping-cart-660b4",
      storageBucket: "shopping-cart-660b4.appspot.com",
      messagingSenderId: "552981248017",
      appId: "1:552981248017:web:41848d1c32d64ed91859b0",
      measurementId: "G-S8ZB9K7699"
    }),
    AngularFireDatabaseModule
  ],
  providers: [MassengerService,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
