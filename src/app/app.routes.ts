import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminAreaComponent } from './pages/admin-area/admin-area.component';
import { DoctorsAreaComponent } from './pages/doctors-area/doctors-area.component';
import { authGuard } from './guards/auth.guard';
import { doctorGuard } from './guards/doctor.guard';
import { adminGuard } from './guards/admin.guard';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin-area',
        component: AdminAreaComponent,
        canActivate: [authGuard, adminGuard]
    },
    {
        path: 'doctors-area',
        component: DoctorsAreaComponent,
        canActivate: [authGuard, doctorGuard]
    }
];
