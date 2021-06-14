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
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes =  [
                          {path: "", component: IndexComponent, data : {title: 'LibApp'}},
                          {path:'book',component:BookComponent,
                                children:[{path:'',component:BooksComponent, data : {title: 'LibApp - Books'}},
                                          // {path:'readmore', component:ReadbookComponent},
                                          // {path:'update',canActivate:[AuthGuard] ,component:UpdatebookComponent}
                                        ]},
                          {path:'author',component:AuthorComponent,
                                children:[{path:'',component:AuthorsComponent, data : {title: 'LibApp - Authors'}},
                                          // {path:'readmore', component:ReadauthComponent},
                                          // {path:'update',canActivate:[AuthGuard] ,component:UpdateauthComponent}
                                        ]},
                          {path: "addbook", component: AddbookComponent, canActivate:[AuthGuard], data : {title: 'LibApp - Add Book'}},
                          {path: "addauthor", component: AddauthorComponent, canActivate:[AuthGuard], data : {title: 'LibApp - Add Author'}},
                          {path: "login", component: LoginComponent, data : {title: 'LibApp - Login'}},
                          {path: "signup", component: SignupComponent, data : {title: 'LibApp - Signup'}},
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
