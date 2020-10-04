import { ImageService } from './../../shared/image.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder,FormArray } from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import { finalize } from 'rxjs/Operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  isSubmitted:boolean=false;

  imgSrc: string ;
selectedImage: any = null;
//formTemplate: FormGroup;


formTemplate = new FormGroup({
  caption: new FormControl(''),
  imageUrl: new FormControl(''),
  category: new FormControl('')
  
})

  constructor(private storage:AngularFireStorage,private service:ImageService,private formBuilder:FormBuilder) { 
   // this.formTemplate=this.formBuilder.group({
     // caption : [''],
      //imageUrl : [''],
      //category: [''],
    //});

    
   

  }

 

  ngOnInit(): void {
    this.resetForm();
  }

  showPreview(event:any){
     if(event.target.files && event.target.files[0]){
       const reader = new FileReader();
       reader.onload = (e:any) => this.imgSrc = e.target.result;
       reader.readAsDataURL(event.target.files[0]);
       this.selectedImage = event.target.files[0]; 
     }
     else{
       this.imgSrc = 'assets/Images/download.jpg';
       this.selectedImage=null;
     }
  }


onSubmit(formValue) {
  this.isSubmitted=true;
  if(this.formTemplate.valid){
    var filePath =  `${formValue.category }/${ this.selectedImage.name}_${new Date().getTime()}`;
    const  fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
      finalize(()=> {
        fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.service.insertImageDetails(formValue);
            this.resetForm();
        })
        })
    ).subscribe();
  }
}

resetForm(){
  this.formTemplate.reset();
  this.formTemplate.setValue({
    caption:'',
    imageUrl:'',
    category:''

  });
  this.imgSrc = 'assets/Images/download.jpg';
this.selectedImage=null;
  this.isSubmitted=false; 
}

}
