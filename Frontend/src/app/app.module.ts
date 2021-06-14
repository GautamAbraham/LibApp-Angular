import { NgModule } from '@angular/core';
import { BrowserModule,Title} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReadbookComponent } from './readbook/readbook.component';
import { ReadauthorComponent } from './readauthor/readauthor.component';
import { EditbookComponent } from './editbook/editbook.component';
import { EditauthorComponent } from './editauthor/editauthor.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavComponent,
    FooterComponent,
    BooksComponent,
    BookComponent,
    AddbookComponent,
    AddauthorComponent,
    AuthorComponent,
    AuthorsComponent,
    LoginComponent,
    SignupComponent,
    ReadbookComponent,
    ReadauthorComponent,
    EditbookComponent,
    EditauthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
