import { Component, OnInit } from '@angular/core';
import { OnlineExperienceService } from 'src/app/services/online-experience.service';
import { ApiResponse } from '../../models/ApiResponse';
import { onlineExperience } from '../../models/onlineExperience';

@Component({
  selector: 'app-all-online-experience',
  templateUrl: './all-online-experience.component.html',
  styleUrls: ['./all-online-experience.component.css']
})
export class AllOnlineExperienceComponent implements OnInit {

  onlineExperiences: onlineExperience[] = [];
  approvedExperiences = [];
  pageNumber: number = 8;
  currentPg: number = 1;
  isLoaded: boolean = false;
  constructor(private _OnlineExperienceService:OnlineExperienceService) { }
  ngOnInit(): void {
      this._OnlineExperienceService.getAllOnlineExpriences().subscribe(res => {
      console.log(res);
      let foundedExperience = (res as ApiResponse).data;
      for (let i=0; i<foundedExperience.length;i++)
      {
        this.onlineExperiences.push(foundedExperience[i]);
      }
      console.log(this.onlineExperiences);
      for (let i = 0; i < this.onlineExperiences.length; i++)
      {
        if (this.onlineExperiences[i].onlineExperienceStatus === 'Approve')
        {
          this.approvedExperiences.push(this.onlineExperiences[i]);
        }
      }
      console.log(this.approvedExperiences);
      this.isLoaded = true;
    });
  }

}
