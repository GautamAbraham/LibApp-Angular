import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth.guard";

import { FeaturesComponent } from './features/features.component';
import { IndexComponent } from './index/index.component';
import { KittyComponent } from './kitty/kitty.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { PuppyComponent } from './puppy/puppy.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { 
    path:"", 
    component: IndexComponent, 
    data : {  
      title: 'AngApp'  
    }
  },
  { 
    path:"features", 
    component: FeaturesComponent,
    data : {  
      title: 'AngApp - Features'  
    },
    children:[
    { 
      path:"puppy", 
      component: PuppyComponent,
      data : {  
        title: 'AngApp - Puppy'  
      } 
    },
    { 
      path:"kitty", 
      component: KittyComponent,
      data : {  
        title: 'AngApp - Kitty'  
      }
    },
  ]},
  { 
    path:"pricing", 
    canActivate: [AuthGuard],
    component: PricingComponent,
    data : {  
      title: 'AngApp - Pricing'  
    } 
  },
  { 
    path:"login", 
    component: LoginComponent,
    data : {  
      title: 'AngApp - Login'  
    } 
  },
  { 
    path:"signup", 
    component: SignupComponent,
    data : {  
      title: 'AngApp - Sign Up'  
    } 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
