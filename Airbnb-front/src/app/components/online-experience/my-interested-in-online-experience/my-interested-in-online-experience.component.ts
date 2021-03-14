import { Component, OnInit } from '@angular/core';
import { OnlineExperienceService } from 'src/app/services/online-experience.service';
import { ApiResponse } from '../../models/ApiResponse';

@Component({
  selector: 'app-my-interested-in-online-experience',
  templateUrl: './my-interested-in-online-experience.component.html',
  styleUrls: ['./my-interested-in-online-experience.component.css']
})
export class MyInterestedInOnlineExperienceComponent implements OnInit {

  interestedIn = [];
  pageNumber: number = 3;
  currentPg: number = 1;
  isLoaded: boolean = false;
  constructor(private _OnlineExperienceService: OnlineExperienceService) { }

  ngOnInit(): void {
    this._OnlineExperienceService.getinterestedInOnlineExperiencesOfUser().subscribe(res => {
      console.log(res);
      let foundedExperience = (res as ApiResponse).data;
      this.interestedIn.push(foundedExperience);
      console.log(this.interestedIn[0]);
      this.isLoaded = true;
    });
  }

  delete(index: number) {
    let deletedOnlineExperience = this.interestedIn[0][index];
    let interestedInID = deletedOnlineExperience.interestedInID;
    this._OnlineExperienceService.deleteInterestedInOnlineExperience(interestedInID).subscribe(res => {
      console.log((res as ApiResponse).message);
      this.interestedIn[0].splice(index, 1);
    });
  }
}
