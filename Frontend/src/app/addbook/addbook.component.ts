import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BookService } from '../books.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private _router: Router, private bookService: BookService) { }

  ngOnInit(): void {
  }

  book={
    title: '',
    author: '',
    genre: '',
    desc: '',
    img: '',
  }
  addBook(){
    this.bookService.addBook(this.book)
    this._router.navigate(['books']);
  }
}
