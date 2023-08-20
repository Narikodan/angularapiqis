import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  
  constructor(
    private UpdateUserService:ServiceService,
    private router:Router
    ){}

  userInfo = {
    id: '0', name: '', email: '', password: ''
  }

  ngOnInit(): void {
    this.userInfo = this.UpdateUserService.userDetails
  }


  UpdateUser(a:any){
    console.log(a)
    this.userInfo = {
      id: this.userInfo.id, name: a.name, email: a.email, password: a.password
    }

    console.log(this.userInfo)
    this.UpdateUserService.updateUser(this.userInfo).subscribe((res: any) => {
      console.log('checking..')
      console.log(res);
      alert("User details updated successfully!")
      sessionStorage.setItem('loggedInUser', JSON.stringify(this.userInfo));
      this.router.navigate(['/welcome']);
      
    })

  }

  deleteDetails(){
    console.log('delete button clicked!!!!')
    console.log(this.userInfo.id)
    this.UpdateUserService.deleteUser(this.userInfo.id).subscribe((res: any) => {
      console.log('deleting..')
      console.log(res);
      alert("User details deleted successfully!")
      sessionStorage.clear();
      this.router.navigate(['']);
      
    })
  }

}
