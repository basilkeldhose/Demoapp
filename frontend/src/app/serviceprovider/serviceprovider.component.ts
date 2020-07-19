import { Component, OnInit } from '@angular/core';
import {ProvidersService} from '../services/providers.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-serviceprovider',
  templateUrl: './serviceprovider.component.html',
  styleUrls: ['./serviceprovider.component.css']
})
export class ServiceproviderComponent implements OnInit {
  showmessage: boolean
  errormessage: string
  constructor(public providerservice:ProvidersService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.providerservice.postProvider(form.value).subscribe(
      res => {
        this.showmessage = true;
        setTimeout(() => this.showmessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.errormessage = err.error.join('<br/>');
        }
        else
          this.errormessage = 'Something went wrong.Please contact admin.';
      }

    )
  }
  resetForm(form:NgForm){
    this.providerservice.selectedProvideres={
    name:'',
    phone:'',
    service:'',
    area:'',
    password:""

  };
  form.resetForm();
  this.errormessage=''

  }

}
