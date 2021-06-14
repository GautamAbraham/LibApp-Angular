import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookService } from '../books.service';

@Component({
  selector: 'app-readbook',
  templateUrl: './readbook.component.html',
  styleUrls: ['./readbook.component.css']
})
export class ReadbookComponent implements OnInit {

  constructor(private router: Router, private bookService: BookService, public _auth: AuthService) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("readMoreBookId");
    this.bookService.getBook(bookId).subscribe((data)=>{
      this.bookData=JSON.parse(JSON.stringify(data));
  })
  }

  bookData = {
    _id :'',
    title:'',
    author:'',
    genre:'',
    desc:'',
    img:''
  }
  updateBook(){
    this.router.navigate(['books/update']);
  }
  deleteBook(){
    console.log("delete")
    this.bookService.deleteBook(this.bookData)
    this.router.navigate(['books']);
  }
}
