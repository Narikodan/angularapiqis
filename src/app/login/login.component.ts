import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private LogInService:ServiceService,
    private router:Router
    ){}

  LogIn(a:any){
    console.log(a)
    this.LogInService.UserLogIn(a).subscribe((res: any) => {
      console.log(res);
      if (res.status==1) {
        sessionStorage.setItem('loggedInUser', JSON.stringify(a));
        this.router.navigate(['/welcome']);
      } else {
        alert("Login failed,Check your credentials")
      }
      // alert("User created successfully!")
      // this.router.navigate(['/home']);
    })

  }


}
