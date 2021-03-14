import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from 'src/app/auth.guard';
import { AddOnlineExperienceComponent } from './add-online-experience/add-online-experience.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ConfirmOnlineExperienceComponent } from './confirm-online-experience/confirm-online-experience.component';
import { MyOnlineExperiencesComponent } from './my-online-experiences/my-online-experiences.component';
import { ChangeImageComponent } from './change-image/change-image.component';
import { EditOnlineExperienceComponent } from './edit-online-experience/edit-online-experience.component';
import { AllOnlineExperienceComponent } from './all-online-experience/all-online-experience.component';
import { OnlineExperienceDetailsComponent } from './online-experience-details/online-experience-details.component';
import { CardComponent } from './components/card/card.component';
import { MyInterestedInOnlineExperienceComponent } from './my-interested-in-online-experience/my-interested-in-online-experience.component';
import { WhoInterestedComponent } from './who-interested/who-interested.component';



const routes:Routes=[
  {path :'',component: IndexComponent ,canActivate:[AuthGuard]},
  {path :'addOnlineExperience',component: AddOnlineExperienceComponent,canActivate:[AuthGuard]},
  {path :'confirmOnlineExperience',component: ConfirmOnlineExperienceComponent},
  {path :'myOnlineExperiences',component: MyOnlineExperiencesComponent},
  {path :'changeImage/:id',component: ChangeImageComponent},
  {path :'editOnlineExperience/:id',component:EditOnlineExperienceComponent},
  {path :'allOnlineExperience',component:AllOnlineExperienceComponent,canActivate:[AuthGuard]},
  {path :'onlineExperienceDetails/:id',component:OnlineExperienceDetailsComponent},
  {path :'myInterestedInOnlineExperience',component:MyInterestedInOnlineExperienceComponent},
  {path :'whoInterested/:id',component:WhoInterestedComponent}

  ];


@NgModule({
  declarations: [IndexComponent,CardComponent, AddOnlineExperienceComponent, ConfirmOnlineExperienceComponent,
     MyOnlineExperiencesComponent, ChangeImageComponent, EditOnlineExperienceComponent,
      AllOnlineExperienceComponent, OnlineExperienceDetailsComponent,
       MyInterestedInOnlineExperienceComponent,
       WhoInterestedComponent],
  imports: [
    RouterModule.forChild(routes),SharedModule,CommonModule,NgxPaginationModule,BsDatepickerModule.forRoot(),TimepickerModule.forRoot()
  ]
})
export class OnlineExperienceModule { }
