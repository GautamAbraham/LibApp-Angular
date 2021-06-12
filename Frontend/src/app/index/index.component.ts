import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = "Mwon!";
  name = 'Shah';
  typed = true;
  list = ["yes", "no", "yeda", "poda"];
  updateName(event) {
    this.name = event.target.value;
  }
  updateDisplay() {
    this.title = this.name;
    this.typed = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
