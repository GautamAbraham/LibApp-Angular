import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  user={
    email:'',
    password:''
  }
  userLogin(){
    // console.log(this.user.email, this.user.password)
    this._auth.loginRequest(this.user).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate([''])
      },
      err => {
        console.log(err);
        this._router.navigate([''])
      }
    ) 
  }
}
