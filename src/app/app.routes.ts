import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent ,title:"Home Page"},
  {path:"projects",component:ProjectsComponent ,title:"Projects Page"},
  {path:"contact",component:ContactComponent,title:"Contact Page"},
];
