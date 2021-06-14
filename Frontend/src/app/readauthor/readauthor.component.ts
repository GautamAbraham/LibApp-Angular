import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-readauthor',
  templateUrl: './readauthor.component.html',
  styleUrls: ['./readauthor.component.css']
})
export class ReadauthorComponent implements OnInit {

  constructor(private router: Router, private authorService: AuthorService, public _auth: AuthService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("readMoreAuthorId");
    this.authorService.getAuthor(authorId).subscribe((data)=>{
      this.authorData=JSON.parse(JSON.stringify(data));
  })
  }

  authorData={
    _id :'',
    author:'',
    famous_work:'',
    desc:'',
    img:''
  };
  updateAuthor(){
    this.router.navigate(['authors/update']);
  }
  deleteAuthor(){
    console.log("delete")
    this.authorService.deleteAuthor(this.authorData)
    this.router.navigate(['authors']);
  }
}
