import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import { ApiResponse } from '../../models/ApiResponse';
@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.component.html',
  styleUrls: ['./my-experience.component.css']
})
export class MyExperienceComponent implements OnInit {
  experiences=[];
  startDate:any;
  endDate:any;
  isLoaded:boolean=false
  pageNumber:number=3;
  currentPg:number=1;
  constructor( private _experienceService:ExperienceService) { }

  ngOnInit(): void {
    this._experienceService.getuserExp().subscribe(res=>{
      console.log((res as ApiResponse).data)
      let currentExperience=(res as ApiResponse).data;
      this.experiences.push(currentExperience);
      console.log(this.experiences[0])
      this.isLoaded=true
    })
  }

  deleteExperience(index:number)
  { 
    //we got the object we clicked on
    let experience=this.experiences[0][index];
    //we got id 
    let experienceId=experience.experienceID;
    console.log(experienceId)
    
     this._experienceService.deleteExperience(experienceId).subscribe(res=>{
      console.log(res);
       this.experiences[0].splice(index,1);
       console.log(res);
     })


  }



}
