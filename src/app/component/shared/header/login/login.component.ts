import { FirebaseService } from './../../../../services/firebase.service';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

model: any={}

@Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService:FirebaseService) { }

  ngOnInit(): void {
  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }


  login() {

   // e.preventDefault();
      console.log(this.model)
  } 
  
}

