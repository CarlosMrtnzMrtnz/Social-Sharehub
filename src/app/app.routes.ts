import { Routes } from '@angular/router';
import { PublicacionesComponent } from './components/templates/publicaciones/publicaciones.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

export const routes: Routes = [
    { path: '', component: RegisterComponent},
    { path: 'home', component: PublicacionesComponent},
    { path: 'login', component: LoginComponent}
];
