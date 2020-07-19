import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './customer/login/login.component';
import { RegisterComponent } from './customer/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RequestComponent } from './request/request.component';
import { ServicestoreComponent } from './servicestore/servicestore.component';
import { ServiceproviderComponent } from './serviceprovider/serviceprovider.component'

import { FormsModule } from '@angular/forms';  
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RequestComponent,
    ServicestoreComponent,
    ServiceproviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
