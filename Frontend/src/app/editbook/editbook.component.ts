import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../books.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {    
    let bookId = localStorage.getItem("readMoreBookId");
    this.bookService.getBook(bookId).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
      console.log(this.book)
  })
  }
  
  book = {
    _id :'',
    title:'',
    author:'',
    genre:'',
    desc:'',
    img:''
  }
  editBook(){
    this.bookService.editBook(this.book);
    this.router.navigate(['books']);
  }
}
