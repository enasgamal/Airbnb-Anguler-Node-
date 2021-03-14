import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../../models/apiResponse';
import { onlineExperience } from '../../models/onlineExperience';
import { ExperienceService } from './../../../services/experience.service';

@Component({
  selector: 'app-online-experience',
  templateUrl: './online-experience.component.html',
  styleUrls: ['./online-experience.component.css']
})
export class OnlineExperienceComponent implements OnInit {
  experiences=[];
  Approved="Approve";
  Declined="Decline";
  constructor(private _experienceService:ExperienceService) { }

  ngOnInit(): void {
    this._experienceService.getAllOnlineExperiences().subscribe(res=>{
      console.log((res as ApiResponse).data);
      this.experiences.push((res as ApiResponse).data);

    })
  }

   
  approve(item:any)
  {
    let newexperience:onlineExperience=new onlineExperience;
    let experience=item;
    console.log(experience.onlineExperienceID)
    console.log(this.experiences[0], experience)
    newexperience=experience;
    newexperience.onlineExperienceStatus="Approve";
    console.log(newexperience)
    this._experienceService.editOnlineExperience(newexperience).subscribe(res=>{
      console.log((res as ApiResponse).data);
    })
  }

  decline(item:any)
  {
    let newexperience:onlineExperience=new onlineExperience;
    let experience=item;
    console.log(experience.onlineExperienceID)
    console.log(this.experiences[0], experience)
    newexperience=experience;
    newexperience.onlineExperienceStatus="Decline";
    console.log(newexperience)
    this._experienceService.editOnlineExperience(newexperience).subscribe(res=>{
      console.log((res as ApiResponse).data);
    })
  }
  
}
