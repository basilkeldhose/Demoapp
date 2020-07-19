import { Injectable } from '@angular/core';
import {Request} from './request'
import{HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RequestService {
selectedRequest:Request={
  address:'',
  phone:'',
  location:''
}
  constructor(private http:HttpClient) { }

  postrequest(request:Request){
    return this.http.post('http://localhost:3000/api'+'/service',request)
  }
}
