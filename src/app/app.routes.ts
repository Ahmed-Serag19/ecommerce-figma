import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/auth/login/login.component';
import { RegisterComponent } from './routes/auth/register/register.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
