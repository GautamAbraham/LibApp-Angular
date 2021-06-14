import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book= {
    _id :'',
    title:'',
    author:'',
    genre:'',
    description:'',
    img:''
  }
  constructor( private http:HttpClient) { }
  // getProduct(id:any){
  //   return this.http.get("http://localhost:3000/"+id);
  // }
  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }
  getBook(id){
    return this.http.get("http://localhost:3000/books/"+id);
    
  }
  addBook(book){
    return this.http.post("http://localhost:3000/books/addbook",{"book":book}).subscribe(data =>{console.log(data)})
  }
  editBook(book:any){
    console.log("updating book")
    return this.http.post("http://localhost:3000/books/update",{"book":book}).subscribe(data =>{console.log(data)})
  }
  deleteBook(book:any){
    console.log("deleting book")
    return this.http.post("http://localhost:3000/books/delete",{"book":book}).subscribe(data =>{console.log(data)})
  }
}
