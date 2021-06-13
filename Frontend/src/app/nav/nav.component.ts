import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['']);
  }
}
