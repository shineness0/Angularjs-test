import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'register', component:HomeComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'admin-dashboard', component:AdminDashboardComponent},
];
