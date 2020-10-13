
//import { AuthService } from './../../../../services/auth/auth.service';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup,FormBuilder, Validators, EmailValidator} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseService } from './../../../../services/firebase.service';
/**
 * 
 * @param form  
 */

function passwordMatchValidator(form) {
    const password = form.get('password')
    const confirmPassword = form.get('confirmPassword')

if(password.value !== confirmPassword.value){
  confirmPassword.setErrors({passwordsMatch: true})
  
}else {
    confirmPassword.setErrors(null)
}
   return null
}


function symbolValidator(control) {
if(control.hasError('required')) return null;  
if(control.hasError('minlength')) return null; 

  if(control.value.indexOf('@') > -1){
    return null
  }else {
    return {symbol: true}
  }
  
} 



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

authError: any;

registerForm: FormGroup;

@Output() isLogout = new EventEmitter<void>()
  constructor(private builder: FormBuilder,private auth: AngularFireAuth, private router: Router,public firebaseService: FirebaseService) { }

  ngOnInit(): void {
   this.buildForm()
   // this.auth.eventAuthError$.subscribe( data => {
     // this.authError =data;
    //})

  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

 // createUser(frm){
   // this.auth.createUser(frm.value);
  //}

  buildForm() {
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address:['', Validators.required],
      username:['', Validators.required],
      password:['', [Validators.required, symbolValidator, Validators.minLength(4  )] ],
      confirmPassword:''
    },{
      validators: passwordMatchValidator
    })

  }

  register() {
     
const { email,password} = this.registerForm.value;
    
    this.auth.createUserWithEmailAndPassword(email,password).then((user) => {
      console.log('RegisterComponent -> register -> user', user)
      this.router.navigate(['']);
    })

  }
  
}
