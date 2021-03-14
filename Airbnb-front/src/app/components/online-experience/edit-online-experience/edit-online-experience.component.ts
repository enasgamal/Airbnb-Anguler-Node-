import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OnlineExperienceService } from 'src/app/services/online-experience.service';
import { ApiResponse } from '../../models/ApiResponse';
import { onlineExperience } from '../../models/onlineExperience';

@Component({
  selector: 'app-edit-online-experience',
  templateUrl: './edit-online-experience.component.html',
  styleUrls: ['./edit-online-experience.component.css']
})
export class EditOnlineExperienceComponent implements OnInit {
  form: FormGroup;
  onlineExperienceId: number;
  onlineExperience: onlineExperience = new onlineExperience();
  minDate: Date;
  isLoaded: boolean = false;
  isMeridian = true;
  myTime1 = new Date();
  myTime2 = new Date();
  valid1 = true;
  valid2 = true;
  constructor(private _OnlineExperienceService:OnlineExperienceService, private _router:Router,private _formBuilder:FormBuilder,private _activatedRoute:ActivatedRoute){
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.onlineExperienceId=+params.get('id');
      console.log(this.onlineExperienceId);
      this._OnlineExperienceService.getOnlineExprienceById(this.onlineExperienceId).subscribe((res) => {
        console.log(res);
        this.onlineExperience = (res as ApiResponse).data;
        console.log(this.onlineExperience);
        this.form = this._formBuilder.group({
          onlineExperienceDescription: [this.onlineExperience.onlineExperienceDescription, [Validators.required]],
          onlineExperienceLink: [this.onlineExperience.onlineExperienceLink, [Validators.required]],
          onlineExperienceType: [this.onlineExperience.onlineExperienceType, [Validators.required]],
          onlineExperienceDate: [this.onlineExperience.onlineExperienceDate, [Validators.required]],
          onlineExperienceLanguage: [this.onlineExperience.onlineExperienceLanguage, [Validators.required]],
          startTime: [this.onlineExperience.startTime, [Validators.required]],
          endTime: [this.onlineExperience.endTime, [Validators.required]],
        });
        this.isLoaded = true;
      });
      });
  }


  editOnlineExperience()
  {
    let updatedOnlineExperience: onlineExperience = new onlineExperience();
    updatedOnlineExperience = this.form.value;
    updatedOnlineExperience.onlineExperienceID = this.onlineExperience.onlineExperienceID;
    this._OnlineExperienceService.editUserOnlineExprience(updatedOnlineExperience).subscribe(res => {
        console.log((res as ApiResponse).data);
        if ((res as ApiResponse).success==true)
        {
          this._router.navigateByUrl('/online-experience/myOnlineExperiences');
        }
      });
  }

   isValid1(event: boolean): void {
    this.valid1 = event;
  }
  isValid2(event: boolean): void {
    this.valid2 = event;
  }
}
