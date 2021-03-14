import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnlineExperienceService } from './../../../services/online-experience.service';
import { ApiResponse } from './../../models/ApiResponse';

@Component({
  selector: 'app-who-interested',
  templateUrl: './who-interested.component.html',
  styleUrls: ['./who-interested.component.css']
})
export class WhoInterestedComponent implements OnInit {

  onlineExperienceID: number;
  interestedIn = [];
  isLoaded: boolean = false;
  constructor(private _activatedRoute:ActivatedRoute,private _OnlineExperienceService:OnlineExperienceService) { }


  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(params=>{
      this.onlineExperienceID=+params.get('id');
      console.log(this.onlineExperienceID);
      console.log(this.interestedIn);
      console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm');
      this._OnlineExperienceService.getinterestedInOnlineExperienceById(this.onlineExperienceID).subscribe(res => {
       console.log((res as ApiResponse).data);
       this.interestedIn.push((res as ApiResponse).data);
       console.log(this.interestedIn);
       console.log(this.interestedIn[0]);
       console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm')
       this.isLoaded = true;
      });
    });
  }
}
