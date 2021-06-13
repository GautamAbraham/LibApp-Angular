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
  addBook(book){
    return this.http.post("http://localhost:3000/addbook",{"book":book}).subscribe(data =>{console.log(data)})
  }

  // newProduct(item:any)
  // {   
  //   return this.http.post("http://localhost:3000/insert",{"product":item})
  //   .subscribe(data =>{console.log(data)})
  // }
  // deleteBook(id:any){

  //   return this.http.delete("http://localhost:3000/remove/"+id)

  // }
  // editProduct(product:any)
  // {
  //   console.log('client update')
  //   return this.http.put("http://localhost:3000/update",product)
  //   .subscribe(data =>{console.log(data)})
  // }
}
