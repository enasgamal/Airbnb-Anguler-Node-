import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
import { CardComponent } from './components/card/card.component';



const routes:Routes=[
  {path :'',component:HomeComponent},
]

@NgModule({
  declarations: [HomeComponent, CitiesComponent, CardComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
