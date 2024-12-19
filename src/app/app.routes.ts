import { Routes } from '@angular/router';
import { AnimationManagementComponent } from './component/animation-management/animation-management.component';
import { HomeComponent } from './component/home/home.component';
import { WebsiteManagementComponent } from './component/website-management/website-management.component';
import { ContactComponent } from './component/contact/contact.component';

export const routes: Routes = [
  { 
    path: 'animation', 
    component: AnimationManagementComponent 
  },
  // Add a default route if needed
  { 
    path: '', 
    redirectTo: '/animation', 
    pathMatch: 'full' 
  },
  {path: 'home', component: HomeComponent},
  {path: 'animation', component: AnimationManagementComponent},
  {path: 'websites', component: WebsiteManagementComponent},
  {path: 'contact', component: ContactComponent}

];
