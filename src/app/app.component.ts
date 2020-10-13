import { FirebaseService } from './services/firebase.service';
import { Component, HostBinding, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 // title = 'ShoppingCart';
  title = 'firebase-angular-auth';
  isSignedIn = false
  constructor(public firebaseService: FirebaseService){}
  ngOnInit(){
    if(localStorage.getItem('user') !== null)
    this.isSignedIn =true
    else
    this.isSignedIn=false
  }
  async onRegister(email:string,password:string){
    await this.firebaseService.register(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

  handleLogout(){
    this.isSignedIn = false
  }
}
