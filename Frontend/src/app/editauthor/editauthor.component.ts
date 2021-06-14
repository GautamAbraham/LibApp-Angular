import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {

  constructor(private router: Router, private authorService: AuthorService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("readMoreAuthorId");
    this.authorService.getAuthor(authorId).subscribe((data)=>{
      this.authorData=JSON.parse(JSON.stringify(data));
      console.log(this.authorData)
  })
  }

  authorData={
    author: '',
    famous_work: '',
    desc: '',
    img: '',
  }
  editAuthor(){
    this.authorService.editAuthor(this.authorData);
    this.router.navigate(['authors']);
  }
}
