import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../../models/apiResponse';
import { Experience } from '../../models/experience';
import { Host } from '../../models/host';
import { ExperienceService } from './../../../services/experience.service';
import { HostService } from './../../../services/host.service';
import { onlineExperience } from './../../models/onlineExperience';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
experiences:Experience[]=[];
reternedExperiences:number=0;
reternedPlaces:number=0;
places:Host[]=[];
experiencesNumbers:number=this.reternedExperiences;
placesNumber:number=this.reternedPlaces;
approvedHosts=[];
approvedExperiences=[];
approvedOnlineExperiences=[];
onlineExperience=[]

  constructor(private _experienceService:ExperienceService,private _hostService:HostService) { }

  ngOnInit(): void {

    this._experienceService.getAllExperiences().subscribe(res=>{
      console.log(res);
      let foundedExperience=(res as ApiResponse).data;
      for(let i=0; i<foundedExperience.length;i++)
      {
        this.experiences.push(foundedExperience[i]);
      }
      console.log(this.experiences.length);
      for(let i=0; i<this.experiences.length;i++)
      {
        if(this.experiences[i].experienceStatus==="Approve")
        {
          this.approvedExperiences.push(this.experiences[i])
        }
      }
      console.log(this.approvedExperiences.length)
      let reternedExperiences=this.approvedExperiences.length
      console.log(reternedExperiences);
      this.experiencesNumbers=reternedExperiences;

      this._hostService.getAllHosts().subscribe(res=>{
        console.log((res as ApiResponse).data)
        let foundHosts = (res as ApiResponse).data
        console.log(foundHosts.length)
        for(let i=0;i<foundHosts.length;i++){
          console.log(foundHosts[i].hostName)
          this.places.push(foundHosts[i])
        }
        console.log(this.places);
        for(let i=0;i<this.places.length;i++){
          console.log(this.places[i].hostStatus)
          if(this.places[i].hostStatus==="Approve"){
            this.approvedHosts.push(this.places[i])
          }
        };
        
        console.log(this.approvedHosts)
        console.log(this.approvedHosts.length);
        this.placesNumber=this.approvedHosts.length;
      })
  }
    );

   

    this._experienceService.getAllOnlineExperiences().subscribe(res=>{
      console.log(res);
      let foundedExperience=(res as ApiResponse).data;
      for(let i=0; i<foundedExperience.length;i++)
      {
        this.onlineExperience.push(foundedExperience[i]);
      }
      console.log(this.onlineExperience);
      for(let i=0; i<this.onlineExperience.length;i++)
      {
        if(this.onlineExperience[i].onlineExperienceStatus==="Approve")
        {
          this.approvedOnlineExperiences.push(this.experiences[i])
        }
      }
      console.log(this.approvedOnlineExperiences)
    })
  }
   

}
