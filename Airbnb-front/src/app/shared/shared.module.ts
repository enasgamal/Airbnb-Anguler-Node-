import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaxLengthPipe } from './max-length.pipe';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';


@NgModule({
  declarations: [
   MaxLengthPipe,
   FilterPipe,
   SortPipe
  ],
  imports: [
CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  exports:[CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule,MaxLengthPipe, FilterPipe,SortPipe]
})
export class SharedModule { }
