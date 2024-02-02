import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserProfile } from '../../models/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  firstName = ''
  lastName = ''
  email = ''
  phone = ''
  gender = ''
  address = ''
  userType = ''
  password = ''

  users:UserProfile[] = []

  
  ngOnInit() {
    if(localStorage['users']) {
      this.users = JSON.parse(localStorage['users'])
    }
  }

  onSubmit = () => {
    const matricNo = Math.round( Math.random() * 50000)
    
    const user = {
      id: this.users.length + 1,
      matricNo,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      gender: this.gender,
      address: this.address,
      userType: this.userType,
      password:this.password
    }

    this.users = [...this.users, user]

    localStorage.setItem('users', JSON.stringify(this.users))
  }
}
