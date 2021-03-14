import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CityComponent } from './city/city.component';
import { PropertyTypeComponent } from './property-type/property-type.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthGuard } from 'src/app/auth.guard';
import {NgxPaginationModule} from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';




const routes:Routes=[
  {path:'',component:IndexComponent,canActivate:[AuthGuard]},
  {path:'confirm',component:ConfirmComponent},
  {path:'placeDetails/:id',component:PlaceDetailsComponent},
  {path:'reserve/:id',component:ReserveComponent},
  {path:'city/:location',component:CityComponent,canActivate:[AuthGuard]},
  {path:'propertyType/:type',component:PropertyTypeComponent,canActivate:[AuthGuard]},
]


@NgModule({
  declarations: [IndexComponent, PlaceDetailsComponent, ReserveComponent, ConfirmComponent, CityComponent, PropertyTypeComponent],
  imports: [
    RouterModule.forChild(routes),SharedModule,CommonModule,MatDatepickerModule,MatNativeDateModule,
    MatFormFieldModule,NgxPaginationModule,BsDatepickerModule.forRoot()
    ]
})
export class PlacesModule { }
