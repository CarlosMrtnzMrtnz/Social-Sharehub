import { Routes } from '@angular/router';
import { PublicacionesComponent } from './components/templates/publicaciones/publicaciones.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

export const routes: Routes = [
    { path: '', component: PublicacionesComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent}
];
