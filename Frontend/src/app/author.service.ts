import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  author= {
    _id :'',
    author: '',
    famous_work: '',
    desc: '',
    img: ''
  }
  constructor( private http:HttpClient) { }

  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }
  addAuthor(author){
    return this.http.post("http://localhost:3000/addauthor",{"author":author}).subscribe(data =>{console.log(data)})
  }
}