import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookService } from "../books.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  
  constructor(private router: Router, private bookService: BookService, public _auth: AuthService) { }

  ngOnInit(): void {
      this.bookService.getBooks().subscribe((data)=>{
        this.booksData=JSON.parse(JSON.stringify(data));
    })
  }

  booksData=[{
    _id :'',
    title:'',
    author:'',
    genre:'',
    img:''
  }]
    // editBook(book:any){
    //   localStorage.setItem("editBookId", book._id.toString());
    //   this.router.navigate(['update']);
  
    // }
    // deleteBook(book:any){
    //   this.bookService.deleteProduct(book._id)
    //     .subscribe((data) => {
    //       this.booksData = this.booksData.filter(p => p !== book);
    //     })
    // }
}
