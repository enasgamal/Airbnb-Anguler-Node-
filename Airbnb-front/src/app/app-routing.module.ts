import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/shared/layout/layout.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component'


const routes: Routes = [
  {
    path: '', 
    component:LayoutComponent,
    loadChildren: () => import('../app/components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'user', 
    component:NavbarComponent,
    loadChildren: () => import('../app/components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'about', 
    component:NavbarComponent,
    loadChildren: () => import('../app/components/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'hosting', 
    component:NavbarComponent,
    loadChildren: () => import('../app/components/hosting/hosting.module').then(m => m.HostingModule)
  },
  {
    path: 'places', 
    component:NavbarComponent,
    loadChildren: () => import('../app/components/places/places.module').then(m => m.PlacesModule)
  },
  {
    path: 'experience', 
    component:NavbarComponent,
    loadChildren: () => import('../app/components/experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path: 'online-experience', 
    component:NavbarComponent,
    loadChildren: () => import('../app/components/online-experience/online-experience.module').then(m => m.OnlineExperienceModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
