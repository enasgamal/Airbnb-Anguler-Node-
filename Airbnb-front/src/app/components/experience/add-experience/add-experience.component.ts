import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienceService } from 'src/app/services/experience.service';
import { ApiResponse } from '../../models/ApiResponse';
import { Experience } from '../../models/experience';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})

export class AddExperienceComponent implements OnInit {
  form: FormGroup;
  isVisible: boolean = false;
  image: null;
  url: any;
  ID: number;
  minDate: Date;
  startDate: Date;
  endDate: Date;

  constructor(private _formBuilder:FormBuilder , private _expService:ExperienceService ,private _router:Router) { 
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
  }

  ngOnInit(): void {

    this.form = this._formBuilder.group({
      place: ['',[Validators.required]],
      typeOfExperience: ['', [Validators.required]],
      description: ['', [Validators.required,Validators.minLength(30)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      totalPrice: ['', [Validators.required]],
      transportation: ['', [Validators.required]],
      pets: ['', [Validators.required]],
      catering: ['', [Validators.required]],
      language: ['', [Validators.required]],
      capacity: ['', [Validators.required]],
      placeImage: [''],
      experienceStatus: [''],
    });
  }


  addExperience(): void{
    let exp: Experience = new Experience();
    exp = this.form.value;
    console.log(exp);
    this._expService.addExp(exp).subscribe(res => {
      console.log(res);
      // bnswy model b el id rag3 mn backend
      exp.experienceID = (res as ApiResponse).data.experienceID;
      this.isVisible = true;
      // bnb3t el id dh 3lshan ytb3t f sora 3lshan y3del
      this.ID = exp.experienceID;
      console.log(this.ID);
    });
  }

  selectImage(event: any): void{
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      const file = event.target.files[0];
      this.image = file;
      reader.readAsDataURL(event.target.files[0]);
      console.log(file);
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      };
    }
  }
  start(): void{
    const formData = new FormData();
    formData.append('placeImage', this.image);
    this._expService.uploadImage(this.ID, formData).subscribe(res => {
      console.log(res);
      if ((res as ApiResponse).success === true){
        this._router.navigateByUrl('/experience/confirm');
      }else{
        alert((res as ApiResponse).message);
      }
    });
  }

  onValueChange1(value: Date): void {
    this.startDate = value;
    console.log(this.startDate);
  }

  onValueChange2(value: Date): void {
    this.endDate = value;
    console.log(this.endDate);
  }
}
