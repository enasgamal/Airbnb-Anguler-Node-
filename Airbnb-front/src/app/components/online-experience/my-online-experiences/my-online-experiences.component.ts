import { Component, OnInit } from '@angular/core';
import { OnlineExperienceService } from 'src/app/services/online-experience.service';
import { ApiResponse } from '../../models/ApiResponse';

@Component({
  selector: 'app-my-online-experiences',
  templateUrl: './my-online-experiences.component.html',
  styleUrls: ['./my-online-experiences.component.css']
})
export class MyOnlineExperiencesComponent implements OnInit {
  onlineExperiences =  [];
  startDate: any;
  endDate: any;
  isLoaded: boolean = false;
  pageNumber: number = 3;
  currentPg: number = 1;

  constructor( private _OnlineExperienceService: OnlineExperienceService ) { }

  ngOnInit(): void {
    this._OnlineExperienceService.getUserOnlineExprience().subscribe(res => {
      console.log((res as ApiResponse).data);
      let currentOnlineExperiences = (res as ApiResponse).data;
      this.onlineExperiences.push(currentOnlineExperiences);
      console.log(this.onlineExperiences[0]);
      this.isLoaded = true;
    });
  }
  deleteOlineExperience(index: number){
    // we got the object we clicked on
    let onlineExperience = this.onlineExperiences[0][index];
    // we got id
    let onlineExperienceId = onlineExperience.onlineExperienceID;
    console.log(onlineExperienceId);
    this._OnlineExperienceService.deleteOnlineExprience(onlineExperienceId).subscribe(res => {
      console.log(res);
      this.onlineExperiences[0].splice(index, 1);
      console.log(res);
     });
  }
}
