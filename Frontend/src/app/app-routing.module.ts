import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: "", component: IndexComponent, data : {  
    title: 'LibApp'  
  }},
  {path: "books", component: BooksComponent, data : {  
    title: 'LibApp - Books'  
  }},
  {path: "authors", component: AuthorsComponent, data : {  
    title: 'LibApp - Authors'  
  }},
  {path: "addbook", component: AddbookComponent, canActivate:[AuthGuard], data : {  
    title: 'LibApp - Add Book'  
  }},
  {path: "addauthor", component: AddauthorComponent, canActivate:[AuthGuard], data : {  
    title: 'LibApp - Add Author'  
  }},
  {path: "login", component: LoginComponent, data : {  
    title: 'LibApp - Login'  
  }},
  {path: "signup", component: SignupComponent, data : {  
    title: 'LibApp - Signup'  
  }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
