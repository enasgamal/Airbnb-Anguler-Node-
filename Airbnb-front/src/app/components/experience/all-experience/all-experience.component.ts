import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import { ApiResponse } from '../../models/ApiResponse';
import { Experience } from '../../models/experience';

@Component({
  selector: 'app-all-experience',
  templateUrl: './all-experience.component.html',
  styleUrls: ['./all-experience.component.css']
})
export class AllExperienceComponent implements OnInit {
  experiences:Experience[]=[];
approvedExperiences=[];
pageNumber:number=8;
currentPg:number=1;
isLoaded:boolean=false
  constructor(private _experienceService:ExperienceService) { }

  ngOnInit(): void {

    this._experienceService.getAllExperiences().subscribe(res=>{
      console.log(res);
      let foundedExperience=(res as ApiResponse).data;
      for(let i=0; i<foundedExperience.length;i++)
      {
        this.experiences.push(foundedExperience[i]);
      }
      console.log(this.experiences);
      for(let i=0; i<this.experiences.length;i++)
      {
        if(this.experiences[i].experienceStatus==="Approve")
        {
          this.approvedExperiences.push(this.experiences[i])
        }
      }
      console.log(this.approvedExperiences)
      this.isLoaded=true
    })

  }
}
