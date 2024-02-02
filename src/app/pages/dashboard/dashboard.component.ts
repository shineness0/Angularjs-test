import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private activated:ActivatedRoute){}

  
  firstName = ''
  lastName = ''
  email = ''
  phone = ''
  gender = ''
  address = ''

  users:UserProfile[]= []
  matricNo:number = 0

  user:UserProfile = 
    {
      matricNo: 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      userType: '',
      address: '',
      password: ''
    }
  
  

  ngOnInit() {
    this.getUser()
  }

  getUser(): void {
    this.matricNo = this.activated.snapshot.params['id']
    
    this.users = JSON.parse(localStorage['users']);

    let user = this.users.find((user:UserProfile) => user.matricNo == this.matricNo);


    this.user = user || this.user

    if(user){
      this.firstName = user.firstName
      this.lastName = user.lastName
      this.email = user.email
      this.phone = user.phone
      this.address = user.address
      this.gender = user.gender
    }
  }

}
