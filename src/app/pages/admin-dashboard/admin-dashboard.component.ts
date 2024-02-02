import { Component } from '@angular/core';
import { UserProfile } from '../../models/user';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  firstName = ''
  lastName = ''
  email = ''
  phone = ''
  gender = ''
  address = ''



  users: UserProfile[] = []

  ngOnInit() {
    if(localStorage['users']) {
      this.users = JSON.parse(localStorage['users'])
    }
  }

}
