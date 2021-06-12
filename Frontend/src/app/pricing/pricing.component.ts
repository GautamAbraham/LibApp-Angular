import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  httpdata;
  constructor(public userServiceObj: UsersService) { }

  ngOnInit(): void {
    this.userServiceObj.getUsers().subscribe((users)=>{
      this.httpdata = users;
    })
  }

}
