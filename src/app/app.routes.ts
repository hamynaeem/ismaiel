import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';

export const routes: Routes = [
  // Add your routes here

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }

];
