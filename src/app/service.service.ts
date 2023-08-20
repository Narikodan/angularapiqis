import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient,
    private router:Router
    ) { }

    userDetails = {
      id: '0', name: '', email: '', password: ''
    }

  submitRegistration(params:any){
    console.log('inside services')
    return this.http.get('https://beyont.in/angularapi/registration.php',{params})
  }

  UserLogIn(params:any){
    console.log('inside services')
    return this.http.get('https://beyont.in/angularapi/login.php',{params})
  }

  getUserById(params:any){
    console.log('olakka')
    console.log(params.email)
    const a = params.email
    return this.http.get('https://beyont.in/angularapi/getuserbyid.php?email='+a)

  }
  updateUser(params:any){
    this.userDetails = params;
    const a = this.userDetails
    console.log('inside services')
    console.log(this.userDetails)
    return this.http.get('https://beyont.in/angularapi/updateuser.php',{params})
  }

  userData(params: any){
    this.userDetails = params
    return this.userDetails
  }

  deleteUser(params:any){
    console.log(params)
    return this.http.get('https://beyont.in/angularapi/deleteuser.php?id='+params)
  }

}
