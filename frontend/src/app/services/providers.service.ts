import { Injectable } from '@angular/core';
import {Providers} from './providers'
import{HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  selectedProvideres:Providers={
  name:'',
  phone:'',
  service:"",
  area:'',
  password:''

}
  constructor(private http:HttpClient) { }
postProvider(providers:Providers){
return  this.http.post('http://localhost:3000/api'+'/serviceprovider',providers)
}
getuserprofile(){
  return this.http.get('http://localhost:3000/api'+'/providerprofile')
}
}
