import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service'

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  constructor(private router: Router, private authorService: AuthorService) { }

  ngOnInit(): void {
  }

  authorData={
    author: '',
    famous_work: '',
    desc: '',
    img: '',
  }
  addAuthor(){
    this.authorService.addAuthor(this.authorData)
    this.router.navigate(['authors']);
  }
}
