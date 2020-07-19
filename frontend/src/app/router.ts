import{Routes} from '@angular/router'
import { RegisterComponent } from './customer/register/register.component'
import { CustomerComponent } from './customer/customer.component'
import { LoginComponent } from './customer/login/login.component'
import { HomeComponent } from './home/home.component'
import { RequestComponent } from './request/request.component'
import { ServiceproviderComponent } from './serviceprovider/serviceprovider.component'
export const appRoutes:Routes =[
    {path:'/register',
    component:CustomerComponent,
    children:[{path:'',component:RegisterComponent}]
    },
    {
        path:'/login',
    component:CustomerComponent,
    children:[{path:'',component:LoginComponent}]
    },
    {
        path:'/home',component:HomeComponent
    },
    {
        path:'/request',component:RequestComponent
    },
    {
        path:'/serviceprovider',component:ServiceproviderComponent
    }
]