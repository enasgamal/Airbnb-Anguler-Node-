import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router  } from '@angular/router';
import { OnlineExperienceService } from 'src/app/services/online-experience.service';
import { UserService } from 'src/app/services/user.service';
import { ApiResponse } from '../../models/ApiResponse';
import { onlineExperience } from '../../models/onlineExperience';
import { interestedInOnlineExperience } from '../../models/interestedInOnlineExperience';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-online-experience-details',
  templateUrl: './online-experience-details.component.html',
  styleUrls: ['./online-experience-details.component.css']
})
export class OnlineExperienceDetailsComponent implements OnInit {

  onlineExperienceId: number;
  onlineExperience: onlineExperience[] = [];
  IsDisabled: Boolean = false;
  IsVisible:Boolean=false;
  IsInterested:boolean=false;
  myInterests=[];
  IsPosted:boolean=false;
  profileName:string;
  profileEmail:string;
  hostEmail:string;
  hostName:string;
  isLoaded:boolean=false;
  userExperiences=[];
  interestedInID: number;
  onlineExperienceHostEmail: string;
  onlineExperienceType: any;
  onlineExperienceDate: Date;
  onlineExperienceStartTime: Date;
  onlineExperienceEndTime: Date;
  onlineExperienceNumber: number; // to check reserved or not
  onlineExperienceLink:string
  constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService, private _OnlineExperienceService: OnlineExperienceService,private _router:Router) { }


  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.onlineExperienceId = +params.get('id');
      console.log(this.onlineExperienceId)
      forkJoin([this._userService.getProfile(),this._OnlineExperienceService.getOnlineExprienceById(this.onlineExperienceId),
        this._OnlineExperienceService.getinterestedInOnlineExperiencesOfUser()
      ]).subscribe(res=>{
        let foundUser=(res[0] as ApiResponse).data;
        this.profileName=foundUser.firstName;
        this.profileEmail=foundUser.email;

        let foundExperience=(res[1] as ApiResponse).data;
        this.onlineExperience.push(foundExperience);
        console.log(foundExperience)
        this.hostEmail=foundExperience.hostEmail
        // this.onlineExperience.push(foundExperience);
        // this.hostEmail=foundExperience[0].hostEmail;
        console.log(this.hostEmail)
        if(this.profileEmail===this.hostEmail){
        this.IsDisabled=true;
         this.IsPosted =true;
      }
      this.onlineExperienceHostEmail=foundExperience.hostEmail
      this.onlineExperienceType = foundExperience.onlineExperienceType;
      this.onlineExperienceDate = foundExperience.onlineExperienceDate;
      this.onlineExperienceStartTime =foundExperience.startTime;
      this.onlineExperienceEndTime = foundExperience.endTime;
      this.onlineExperienceNumber = foundExperience.onlineExperienceID;
      this.onlineExperienceLink=foundExperience.onlineExperienceLink
      console.log(this.onlineExperienceLink,this.onlineExperienceNumber,this.onlineExperienceHostEmail,this.onlineExperienceType,this.onlineExperienceDate,this.onlineExperienceStartTime,this.onlineExperienceEndTime );

      let foundInterests=(res[2] as ApiResponse).data;
        this.myInterests.push(foundInterests);
        for(let i=0;i<this.myInterests[0].length;i++){
          if(this.myInterests[0][i].onlineExperienceNumber===this.onlineExperienceId){
            this.IsInterested=true;
            this.IsDisabled=true;
          }
        }
        console.log(this.myInterests[0])
        this.isLoaded=true;
      })
    });
    
  }

  confirm(){
    // b3ml post fl interested in online exp
    let interestedInOnlineExperiences: interestedInOnlineExperience = new interestedInOnlineExperience();
    interestedInOnlineExperiences.onlineExperienceHostEmail = this.onlineExperienceHostEmail;
    interestedInOnlineExperiences.onlineExperienceType = this.onlineExperienceType;
    interestedInOnlineExperiences.onlineExperienceDate = this.onlineExperienceDate;
    interestedInOnlineExperiences.onlineExperienceStartTime = this.onlineExperienceStartTime;
    interestedInOnlineExperiences.onlineExperienceEndTime = this.onlineExperienceEndTime;
    interestedInOnlineExperiences.onlineExperienceNumber = this.onlineExperienceId;
    interestedInOnlineExperiences.onlineExperienceLink=this.onlineExperienceLink
    console.log(interestedInOnlineExperiences,);
    this._OnlineExperienceService.interestedInOnlineExperience(interestedInOnlineExperiences).subscribe((res: ApiResponse) => {
      console.log(res as ApiResponse);
      if ((res as ApiResponse).success == true){
        this._router.navigateByUrl('/online-experience/myInterestedInOnlineExperience')
      }
    });
  }
}
