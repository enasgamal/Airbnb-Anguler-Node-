import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import { ApiResponse } from '../../models/ApiResponse';
import { ReserveExperience } from '../../models/reserveExperience';

@Component({
  selector: 'app-reserved-experience',
  templateUrl: './reserved-experience.component.html',
  styleUrls: ['./reserved-experience.component.css']
})
export class ReservedExperienceComponent implements OnInit {

  reservation=[];
  pageNumber:number=3;
  currentPg:number=1;
  isLoaded:boolean=false
  constructor(private _experienceService: ExperienceService) { }

  ngOnInit(): void {
    this._experienceService.getReserveExperience().subscribe(res => {
      console.log(res);
      let foundedExperience = (res as ApiResponse).data;
      this.reservation.push(foundedExperience);
      console.log(this.reservation[0]);
      this.isLoaded=true
    })
  }

  delete(index: number) {
    let deletedExperience = this.reservation[0][index];
    let reserveID = deletedExperience.reserveID;
    this._experienceService.deleteReserveExperience(reserveID).subscribe(res => {
      console.log((res as ApiResponse).message)
      this.reservation[0].splice(index,1)
    })
  }

}
