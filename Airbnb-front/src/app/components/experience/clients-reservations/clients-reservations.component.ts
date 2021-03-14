import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperienceService } from './../../../services/experience.service';
import { ApiResponse } from './../../models/ApiResponse';

@Component({
  selector: 'app-clients-reservations',
  templateUrl: './clients-reservations.component.html',
  styleUrls: ['./clients-reservations.component.css']
})
export class ClientsReservationsComponent implements OnInit {
experienceId:number;
reservation=[];
isLoaded:boolean=false
  constructor(private _activatedRoute:ActivatedRoute,private _experienceService:ExperienceService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params=>{
      this.experienceId=+params.get('id');
      console.log(this.experienceId);
      this._experienceService.getReservedExperienceById(this.experienceId).subscribe(res=>{
       console.log((res as ApiResponse).data);
       this.reservation.push((res as ApiResponse).data);
       console.log(this.reservation[0]);
       this.isLoaded = true;
      });
    });
  }
}
