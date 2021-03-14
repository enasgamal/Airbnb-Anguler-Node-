import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostService } from 'src/app/services/host.service';
import { ApiResponse } from '../../models/ApiResponse';
import { Host } from '../../models/host';
import { UserService } from './../../../services/user.service';
import { PlaceService } from './../../../services/place.service';
import { forkJoin } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlaceReview } from './../../models/place-review';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
hostID:number;
host:Host[]=[]
activity=[];
profileEmail:string;
profileName:string;
hostEmail:string;
isDisabled:boolean=false;
isVisible:boolean=false;
isLoaded:boolean=false;
isPosted:boolean=false
PostBtnisDisable:boolean=false
isYourReview:boolean=false
myTrips=[]
myReview=[]
MyOwnReviews=[]
disabled(){
  if(this.profileEmail===this.hostEmail){
    this.isDisabled=true;
    this.isPosted=true
  }
}
form:FormGroup
  constructor(private _activatedRoute:ActivatedRoute, private _hostService:HostService, private _userService:UserService,private _placeService:PlaceService,private _formBuilder:FormBuilder) { }

  
  ngOnInit(): void {
    this.form=this._formBuilder.group({
      description:['',[Validators.required]],
    })
    this._activatedRoute.paramMap.subscribe(params=>{
      this.hostID=+params.get('id')
      console.log(this.hostID)
      forkJoin([this._hostService.getHostById(this.hostID),this._userService.getProfile(),
        this._placeService.getTrips(),this._placeService.getPlaceReviewsById(this.hostID)]).subscribe(res=>{
        //foundhost by id to get the host email and then compare it with profile email
        let foundHost=(res[0] as ApiResponse).data;
        this.hostEmail=foundHost.hostEmail;
        this.host.push(foundHost);
        for(let i=0;i<this.host[0].activities.length;i++){
          this.activity.push(this.host[0].activities[i])
        };
        console.log(this.activity);
        //get user profile
        let foundUser=(res[1] as ApiResponse).data;
        this.profileEmail=foundUser.email;
        this.disabled()
        this.profileName=foundUser.firstName;
        //get all trips of the user who is logged in to check if he reserved the trip or not
        let foundTrips=(res[2] as ApiResponse).data;
        this.myTrips.push(foundTrips);
        for(let i=0;i<this.myTrips[0].length;i++){
          if(this.myTrips[0][i].tripNumber===this.hostID){
            this.isVisible=true;
            this.isDisabled=true
          }
        }
        let foundReviews=(res[3] as ApiResponse).data
        console.log(res[3] as ApiResponse)
        this.myReview.push(foundReviews)
        if(this.profileEmail===this.hostEmail){
          this.PostBtnisDisable=true
        }
        for(let i=0; i<this.myReview[0].length;i++){
          if(this.profileEmail=== this.myReview[0][i].clientEmail){
            console.log(this.myReview[0][i].clientEmail,this.profileEmail)
            this.MyOwnReviews.push(this.myReview[0][i])
          }
        }
        this.isLoaded=true
      })
      
    });
   
  }

review(){
  let review:PlaceReview=new PlaceReview
  review.placeNumber=this.hostID
  review.comment=this.form.controls['description'].value
  console.log(review)
  this._placeService.postplaceReview(review).subscribe(res=>{
    console.log(res as ApiResponse);
  })
}  
delete(index:number,item:any){
  console.log(index,item)
  this._placeService.deletePlaceReview(item.reviewID).subscribe(res=>{
    console.log((res as ApiResponse))
    console.log(this.myReview)
    this.myReview[0].splice(index,1)
  })
}

}
