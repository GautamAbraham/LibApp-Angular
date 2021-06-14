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
import { ReadbookComponent } from './readbook/readbook.component';
import { ReadauthorComponent } from './readauthor/readauthor.component';
import { EditbookComponent } from './editbook/editbook.component';
import { EditauthorComponent } from './editauthor/editauthor.component';

const routes: Routes =  [
                          {path: "", component: IndexComponent, data : {title: 'LibApp'}},
                          {path:'books',component:BookComponent,
                                children:[{path:'',component:BooksComponent, data : {title: 'LibApp - Books'}},
                                          {path:'readmore', component:ReadbookComponent, data : {title: 'LibApp - Read More'}},
                                          {path:'update',canActivate:[AuthGuard] ,component: EditbookComponent, data : {title: 'LibApp - Edit Book'}}
                                        ]},
                          {path:'authors',component:AuthorComponent,
                                children:[{path:'',component:AuthorsComponent, data : {title: 'LibApp - Authors'}},
                                          {path:'readmore', component: ReadauthorComponent, data : {title: 'LibApp - Read More'}},
                                          {path:'update',canActivate:[AuthGuard] ,component: EditauthorComponent, data : {title: 'LibApp - Edit Author'}}
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
