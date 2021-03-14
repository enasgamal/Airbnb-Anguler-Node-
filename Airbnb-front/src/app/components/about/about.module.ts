import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { PlaceComponent } from './components/place/place.component';
import { CardComponent } from './components/card/card.component';

const routes:Routes=[
  {path :'',component:AboutComponent},
]

@NgModule({
  declarations: [AboutComponent, PlaceComponent, CardComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
