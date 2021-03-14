import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienceService } from 'src/app/services/experience.service';
import { ApiResponse } from '../../models/ApiResponse';
import { Experience } from '../../models/experience';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  form:FormGroup;
  experienceId:number;
  experience:Experience=new Experience();
  minDate: Date;
  isLoaded:boolean=false
  constructor(private _experienceService:ExperienceService,private _router:Router,private _formBuilder:FormBuilder,private _activatedRoute:ActivatedRoute){
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params=>{
      this.experienceId=+params.get('id');
      this._experienceService.getExperienceById( this.experienceId).subscribe((res)=>{
        console.log(res);
        // we saved res from database in experince array
        this.experience= (res as ApiResponse).data;
        this.form=this._formBuilder.group({
          place:[this.experience.place,[Validators.required]],
          typeOfExperience:[this.experience.typeOfExperience,[Validators.required]],
          description:[this.experience.description,[Validators.required]],
          // duration:[this.experience.duration,[Validators.required]],
          startDate: [this.experience.startDate, [Validators.required]],
         endDate: [this.experience.endDate, [Validators.required]],
          totalPrice:[this.experience.totalPrice,[Validators.required]],
          transportation:[this.experience.transportation,[Validators.required]],
          pets:[this.experience.pets,[Validators.required]],
          catering:[this.experience.catering,[Validators.required]],
          language:[this.experience.language,[Validators.required]],
          capacity:[this.experience.capacity,[Validators.required]],
         
        })
        this.isLoaded=true
      })
     
        
      })
  }
  editExperience()
  {
    let updatedExperience:Experience=new Experience();
    updatedExperience= this.form.value;
    updatedExperience.experienceID=this.experience.experienceID;
    this._experienceService.editUserExperience(updatedExperience).subscribe(res=>{
        console.log((res as ApiResponse).data);
        if((res as ApiResponse).success==true)
        {
          this._router.navigateByUrl("/experience/myExperience");
        }
      }
    )

  }
  startDate: Date;
  onValueChange1(value: Date): void {
    this.startDate = value;
  }
  endDate: Date;
  onValueChange2(value: Date): void {
    this.endDate = value;
    }
 
}
