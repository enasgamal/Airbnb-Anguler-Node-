import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyExperienceComponent } from './my-experience/my-experience.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AllExperienceComponent } from './all-experience/all-experience.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ReservedExperienceComponent } from './reserved-experience/reserved-experience.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ClientsReservationsComponent } from './clients-reservations/clients-reservations.component';
import { AuthGuard } from 'src/app/auth.guard';
import {NgxPaginationModule} from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


const routes:Routes=[
  {path :'',component:IndexComponent,canActivate:[AuthGuard]},
  {path :'addExperience',component:AddExperienceComponent},
  {path :'myExperience',component:MyExperienceComponent},
  {path :'editExperience/:id',component:EditExperienceComponent},
  {path :'confirm',component:ConfirmComponent},
  {path :'allExperience',component:AllExperienceComponent,canActivate:[AuthGuard]},
  {path :'experienceDetails/:id',component:ExperienceDetailsComponent},
  {path :'reserveExperience/:id',component:ReserveComponent},
  {path :'myReservedExperience',component:ReservedExperienceComponent},
  {path :'uploadImage/:id',component:UploadImageComponent},
  {path :'clientsReservations/:id',component:ClientsReservationsComponent},

]

@NgModule({
  declarations: [IndexComponent, CardComponent, AddExperienceComponent, MyExperienceComponent, EditExperienceComponent,
     ConfirmComponent, AllExperienceComponent, ExperienceDetailsComponent,
      ReserveComponent, ReservedExperienceComponent, UploadImageComponent,
       ClientsReservationsComponent],
  imports: [
    RouterModule.forChild(routes),SharedModule,CommonModule,NgxPaginationModule,BsDatepickerModule.forRoot()
  ]
})
export class ExperienceModule { }
