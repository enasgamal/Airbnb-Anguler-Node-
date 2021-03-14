import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienceService } from 'src/app/services/experience.service';
import { ApiResponse } from '../../models/ApiResponse';
import { ReserveExperience } from '../../models/reserveExperience';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  form: FormGroup;
  reserveID: number;
  hostEmail: string;
  experiencePrice: string;
  experienceLocation: string;
  experienceDuration: string;
  typeOfExperience:string;
  experienceNumber: number; // to check reserved or not
  constructor(private _formBuilder:FormBuilder, private _activatedRoute:ActivatedRoute,private _experienceService:ExperienceService, private _router:Router) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(params=>{
      this.reserveID=+params.get('id');
      this._experienceService.getExperienceById(this.reserveID).subscribe(res=>{
        console.log(res);
        //we get experience details from experience model
        let experience=(res as ApiResponse).data;
             this.hostEmail=experience.hostEmail;
             this.experiencePrice=experience.totalPrice;
             this.experienceLocation=experience.place;
             this.experienceDuration=experience.duration;
             this.typeOfExperience=experience.typeOfExperience;
             this.experienceNumber=experience.experienceID;
             console.log(experience.experienceID, this.reserveID);

             console.log( this.experiencePrice)
      })
    })
    this.form=this._formBuilder.group({
      country:['',[Validators.required]],
       city:['',[Validators.required]],
       street:['',[Validators.required]],
       apartmentNumber:['',[Validators.required]],
     })

    
  }

  confirm(){
    //we post data from form and we use model reserve
   let reservedExperience:ReserveExperience=new ReserveExperience();
    reservedExperience=this.form.value;
    reservedExperience.experienceHostEmail=this.hostEmail;
    reservedExperience.experienceLocation=this.experienceLocation;
    reservedExperience.experienceDuration=this.experienceDuration;
    reservedExperience.experiencePrice=this.experiencePrice;
    reservedExperience.typeOfExperience=this.typeOfExperience;
    reservedExperience.experienceNumber=this.reserveID;
    console.log(reservedExperience);
    this._experienceService.reserveExperience(reservedExperience).subscribe((res:ApiResponse)=>{
      console.log(res as ApiResponse)
      if((res as ApiResponse).success==true){
        this._router.navigateByUrl('/experience/myReservedExperience')
      }
    })
  
  }  

}
   
