import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private router: Router, private authorService: AuthorService, public _auth: AuthService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data)=>{
      this.authorData =JSON.parse(JSON.stringify(data));
    });
  }

  authorData=[{
    _id :'',
    author:'',
    famous_work:'',
    desc:'',
    img:''
  }];
  readMore(author){
    localStorage.setItem("readMoreAuthorId", author._id.toString());
    this.router.navigate(['/authors/readmore']);
  }
}
