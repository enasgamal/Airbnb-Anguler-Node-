import { Component, OnInit } from '@angular/core';
import { Experience } from '../../models/experience';
import { ExperienceService } from './../../../services/experience.service';
import { ApiResponse } from './../../models/apiResponse';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  experiences=[]
Approved="Approve";
Declined="Decline"

  constructor(private _experienceService:ExperienceService) { }

  ngOnInit(): void {
    this._experienceService.getAllExperiences().subscribe(res =>{
      console.log((res as ApiResponse).data)
      let foundExperiences=(res as ApiResponse).data;
      this.experiences.push(foundExperiences);
      

    })
  }
  
  approve(id:number)
  {
    let newexperience:Experience=new Experience;
    let experience=this.experiences[0][id];
    console.log(experience.experienceID)
    console.log(this.experiences[0], experience)
    newexperience=experience;
    newexperience.experienceStatus="Approve";
    this._experienceService.editExperience(newexperience).subscribe(res=>{
      console.log((res as ApiResponse).data);
    })
  }

  decline(id:number)
  {
    let newexperience:Experience=new Experience;
    let experience=this.experiences[0][id];
    console.log(experience.experienceID)
    console.log(this.experiences[0], experience)
    newexperience=experience;
    newexperience.experienceStatus="Decline";
    this._experienceService.editExperience(newexperience).subscribe(res=>{
      console.log((res as ApiResponse).data);
    })
  }
  

}