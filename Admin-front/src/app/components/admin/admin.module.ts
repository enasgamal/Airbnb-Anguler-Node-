import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HostListsComponent } from './host-lists/host-lists.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HostDetailsComponent } from './host-details/host-details.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { OnlineExperienceComponent } from './online-experience/online-experience.component';

const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'experience',component:ExperiencesComponent},
  {path:'hostLists',component:HostListsComponent},
  {path:'onlineExperience',component:OnlineExperienceComponent},

]

@NgModule({
  declarations: [DashboardComponent, HostListsComponent, ExperiencesComponent, HostDetailsComponent, LoginComponent, LogoutComponent,OnlineExperienceComponent],
  imports: [
    RouterModule.forChild(routes),CommonModule, FormsModule,ReactiveFormsModule 
      ]
   
})
export class AdminModule { }
