import { Component, OnInit } from '@angular/core';
import {ProvidersService} from '../services/providers.service'
@Component({
  selector: 'app-servicestore',
  templateUrl: './servicestore.component.html',
  styleUrls: ['./servicestore.component.css']
})
export class ServicestoreComponent implements OnInit {
 
  constructor(public providerservice:ProvidersService) { }

  ngOnInit(): void {
    this.providerservice.getuserprofile().subscribe(
      res=>{
      }
      
    )

  }

}
