import { Component, OnInit } from '@angular/core';
import {RequestService} from '../services/request.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  showmessage: boolean
  errormessage: string
  constructor(public requestservice:RequestService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.requestservice.postrequest(form.value).subscribe(
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
    this.requestservice.selectedRequest={
    address:'',
    phone:'',
    location:''
  };
  form.resetForm();
  this.errormessage=''

  }

}
