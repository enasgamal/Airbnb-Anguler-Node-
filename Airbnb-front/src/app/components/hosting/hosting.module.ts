import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ListingComponent } from './listing/listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ClientsReservationsComponent } from './clients-reservations/clients-reservations.component';
import { AuthGuard } from 'src/app/auth.guard';
import {NgxPaginationModule} from 'ngx-pagination';

const routes:Routes=[
  {path :'',component:IndexComponent ,canActivate:[AuthGuard]},
  {path :'listing',component:ListingComponent},
  {path :'editListing/:id',component:EditListingComponent},
  {path :'confirm',component:ConfirmComponent},
  {path :'uploadImage/:id',component:UploadImageComponent},
  {path :'clientsReservations/:id',component:ClientsReservationsComponent}
]


@NgModule({
  declarations: [IndexComponent, CardComponent, ImageCardComponent, ListingComponent, EditListingComponent, ConfirmComponent, UploadImageComponent, ClientsReservationsComponent],
  imports: [
    RouterModule.forChild(routes),SharedModule,CommonModule,NgxPaginationModule
  ]
})
export class HostingModule { }
