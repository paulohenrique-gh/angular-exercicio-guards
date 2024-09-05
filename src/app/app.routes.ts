import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminAreaComponent } from './pages/admin-area/admin-area.component';
import { DoctorsAreaComponent } from './pages/doctors-area/doctors-area.component';
import { authGuard } from './guards/auth.guard';
import { doctorGuard } from './guards/doctor.guard';
import { adminGuard } from './guards/admin.guard';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    canActivateChild: [authGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'admin-area',
        component: AdminAreaComponent,
        canActivate: [adminGuard],
      },
      {
        path: 'doctors-area',
        component: DoctorsAreaComponent,
        canActivate: [doctorGuard],
      },
    ],
  },
];
