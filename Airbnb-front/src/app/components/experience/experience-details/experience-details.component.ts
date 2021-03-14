import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ExperienceService } from 'src/app/services/experience.service';
import { UserService } from 'src/app/services/user.service';
import { ApiResponse } from '../../models/ApiResponse';
import { Experience } from '../../models/experience';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {

  experienceId: number;
  experience: Experience[] = [];
  reservedExperience = [];
  experienceCapacity: Number;
  IsDisabled: Boolean = false;
  IsVisible:Boolean=false;
  isReserved:boolean=false;
  profileName:string;
  profileEmail:string;
  hostEmail:string;
  hostName:string;
  isLoaded:boolean=false;
  IsPosted:boolean=false;
  userExperiences=[]


  constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService, private _experienceService: ExperienceService) { }

  ngOnInit(): void {
    //to get experience details by id and push it in array
    this._activatedRoute.paramMap.subscribe(params => {
      this.experienceId = +params.get('id');
      
     forkJoin([this._userService.getProfile(),
      this._experienceService.getExperienceById(this.experienceId),
      this._experienceService.getReservedExperienceById(this.experienceId),
      this._experienceService.getReserveExperience()
    ]).subscribe(res=>{
      //get the profile of the user who logged in
      let foundUser=(res[0] as ApiResponse).data;
      console.log(foundUser.firstName);
      this.profileName=foundUser.firstName;
      this.profileEmail=foundUser.email;
      //to check if the user who is logged in is the same user who post the experience
      let foundExperience=(res[1] as ApiResponse).data;
      this.experience.push(foundExperience);
      this.hostEmail=this.experience[0].hostEmail;
      if(this.profileEmail===this.hostEmail){
        this.IsDisabled=true;
        this.IsPosted =true;
      };
      this.experienceCapacity=this.experience[0].capacity;
      //to check the capacity
      let foundReservations=(res[2] as ApiResponse).data;
      this.reservedExperience.push(foundReservations);
      console.log(this.reservedExperience[0][0]);
      if (this.experienceCapacity == this.reservedExperience[0].length ) {
        this.IsVisible=true;
        this.IsDisabled=true;
      }
      console.log(this.reservedExperience[0].length);
      //to check if the user reserved it before or not
      let foundUserExperiences=(res[3] as ApiResponse).data
      this.userExperiences.push(foundUserExperiences)
      console.log(this.userExperiences.length,this.userExperiences[0].length)
      if(this.userExperiences[0].length>0){
        for(let i=0;i<this.userExperiences[0].length;i++){
          console.log(this.userExperiences[0][i])
          if(this.userExperiences[0][i].experienceNumber === this.experienceId){
            this.IsDisabled=true;
            this.isReserved=true
          }
        }
      }
      this.isLoaded=true
     });
  });

  }

}