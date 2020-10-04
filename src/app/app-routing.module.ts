import { ImagesComponent } from './component/images/images.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/shared/header/register/register.component';
import { LoginComponent } from './component/shared/header/login/login.component';
//import { ProductListComponent } from './component/shopping-cart/product-list/product-list.component';
import { CartComponent } from './component/shopping-cart/cart/cart.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { ImageComponent } from './component/images/image/image.component';
import { ImageListComponent } from './component/images/image-list/image-list.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {path:'cart',component:CartComponent},
 // {path:'products', component:ProductListComponent},
{path: 'login', component:LoginComponent ,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin  }},
{path: 'register', component: RegisterComponent},
{path: '',component: HomeComponent,
//canActivate: [AngularFireAuthGuard]
},
{path:'image-list', redirectTo:'image/upload',pathMatch:'full'},
{path:'image', component:ImagesComponent,children:[{path:'upload',component:ImageComponent},
{path:'list', component:ImageListComponent} 
] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
