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
  getAuthor(id){
    return this.http.get("http://localhost:3000/authors/"+id);    
  }
  addAuthor(author){
    return this.http.post("http://localhost:3000/authors/addauthor",{"author":author}).subscribe(data =>{console.log(data)})
  }
  editAuthor(author:any){
    console.log("updating author")
    return this.http.post("http://localhost:3000/authors/update",{"author":author}).subscribe(data =>{console.log(data)})
  }
  deleteAuthor(author:any){
    console.log("deleting author")
    return this.http.post("http://localhost:3000/authors/delete",{"author":author}).subscribe(data =>{console.log(data)})
  }
}
