import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(
    private registrationService:ServiceService,
    private router:Router
    ){}
  saveRegistration(a:any){
    this.registrationService.submitRegistration(a).subscribe((res: any) => {
      console.log(res);
      alert("User created successfully!")
      this.router.navigate(['/login']);
    })
    console.log(a)
  }
}
