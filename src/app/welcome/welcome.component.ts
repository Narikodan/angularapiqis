import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(
    private router:Router,
    private editUserService:ServiceService
    ){}

  loggedInUserInfo: any;

  ngOnInit(): void {
    const storedData = sessionStorage.getItem('loggedInUser');
    this.loggedInUserInfo = storedData ? JSON.parse(storedData) : null;
    console.log(this.loggedInUserInfo)
  }

  signOut(){
    console.log('signout clicked')
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  editProfile(){
    console.log('edit profile button clicked')
    console.log(this.loggedInUserInfo.email);
    this.editUserService.getUserById(this.loggedInUserInfo).subscribe((res: any) => {
      console.log('api response')
      console.log(res.content);
      this.editUserService.userData(res.content)
      this.router.navigate(['/edit']);
      // alert("User created successfully!")
      // this.router.navigate(['/login']);
    })
  }



}
