import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexComponent } from './index/index.component';
import { AddAdventureComponent } from './add-adventure/add-adventure.component';
import { MyAdventureComponent } from './my-adventure/my-adventure.component';
import { EditAdventureComponent } from './edit-adventure/edit-adventure.component';



const routes:Routes=[
  {path :'',component:IndexComponent},
  {path :'addAdventure',component:AddAdventureComponent},
  {path:"myAdventure", component:MyAdventureComponent},
  {path:"editAdventure", component:EditAdventureComponent}
]

@NgModule({
  declarations: [ IndexComponent, AddAdventureComponent, MyAdventureComponent, EditAdventureComponent],
  imports: [
    RouterModule.forChild(routes),SharedModule,CommonModule
  ]
})
export class AdventureModule { }
