import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userData={
    fname:'',
    lname:'',
    email:'',
    mob:'',
    password:'',
    confpass:''
  }
  userSignUp(){
    console.log('In user signup')
    this.authService.signUpRequest(this.userData)
    alert("sexess")
    this.router.navigate(['login']);
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

}
