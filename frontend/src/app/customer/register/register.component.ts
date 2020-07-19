import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  showmessage: boolean
  errormessage: string
  constructor(public userservice:UserService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.userservice.postUser(form.value).subscribe(
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
    this.userservice.selectedUser={
    fullname:'',
    email:"",
    phone:'',
    password:'',
  };
  form.resetForm();
  this.errormessage=''

  }

}
