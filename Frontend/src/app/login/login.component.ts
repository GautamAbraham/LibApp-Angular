import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    email:'',
    password:''
  }
  userLogin(){
    console.log(this.user.email, this.user.password)
    this.authService.loginRequest(this.user).subscribe((res)=>{
      localStorage.setItem('token', res.token)
      this.router.navigate([''])
    })
    alert("sexess")
  }
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
}
