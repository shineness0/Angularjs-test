import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserProfile } from '../../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router){}

  isSuccess = false
  isError = false
  isLoading = false
  message = ''


  email = ''
  password = ''

onSubmit() {
  const userExists = localStorage['users'] ? JSON.parse(localStorage['users']).find((student:UserProfile) => (student.password === this.password && student.email == this.email)) : false

  if(userExists){
    this.showAlert('Login successful', 'success')
    setTimeout(() => {
      userExists.userType === 'student' ? (
      this.router.navigate(['/dashboard'])
      ) : (
      this.router.navigate(['/admin-dashboard'])
      )
    }, 2000)
  }  else {
    this.showAlert('Invalid username or password', 'error')
  }
}


showAlert(msg:string, status:string) {

  if(status === 'success'){
    this.isSuccess = true
    this.message = msg
  } else {
    this.isError = true
    this.message = msg
  }


  setTimeout(() => {
    this.isSuccess = false
    this.isError = false
    this.message = ''
  }, 2000)


}

}
