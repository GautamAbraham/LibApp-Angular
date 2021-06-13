import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginRequest(user){
    return this.http.post<any>("http://localhost:3000/login", user);
  }
  signUpRequest(user:any){
    // return this.http.post<any>("http://localhost:3000/signup", user);
    return this.http.post("http://localhost:3000/signup",{"user":user}).subscribe(data =>{console.log(data)})
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}
