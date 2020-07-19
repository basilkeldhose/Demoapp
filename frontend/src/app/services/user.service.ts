import { Injectable } from '@angular/core';
import {User} from './user'
import{HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
selectedUser:User={
fullname:'',
email:'',
phone:'',
password:''
}
  constructor(private http:HttpClient) { }
  postUser(user:User){
    return this.http.post('http://localhost:3000/api'+'/register',user)
  }
  login(authCredential){
    return this.http.post('http://localhost:3000/api'+'/authenticate',authCredential)
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken(){
    return localStorage.getItem('token')
  }

deleteToken(){
  localStorage.removeItem('token')

}
getuserPayload(){
var token=this.getToken()
if(token){
  var userpayload = atob(token.split('.')[1]);
  return JSON.parse(userpayload)
}
else 
return null
}
islogedin(){
  var userpayload=this.getuserPayload()
  if(userpayload){
    return userpayload.exp> Date.now()/1000;
  }
  else 
  return false
}
}
