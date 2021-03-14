import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnlineExperienceService } from 'src/app/services/online-experience.service';
import { ApiResponse } from '../../models/ApiResponse';
import { onlineExperience } from '../../models/onlineExperience';

@Component({
  selector: 'app-add-online-experience',
  templateUrl: './add-online-experience.component.html',
  styleUrls: ['./add-online-experience.component.css']
})
export class AddOnlineExperienceComponent implements OnInit {

  form: FormGroup;
  isVisible: boolean = false;
  image: null;
  url: any;
  ID: number;
  minDate: Date;
  isMeridian = true;
  myTime1 = new Date();
  myTime2 = new Date();
  valid1 = true;
  valid2 = true;

  constructor(private _formBuilder : FormBuilder , private _OnlineExperienceService: OnlineExperienceService , private _router: Router) {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      onlineExperienceDescription: ['', [Validators.required]],
      onlineExperienceLink: ['', [Validators.required]],
      onlineExperienceType: ['', [Validators.required]],
      onlineExperienceDate: ['', [Validators.required]],
      onlineExperienceLanguage: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      onlineExperienceImage: [''],
      onlineExperienceStatus: [''],
    });
  }


  addOnlineExprience(): void{
    let exp: onlineExperience = new onlineExperience();
    exp = this.form.value;
    console.log(exp);
    this._OnlineExperienceService.addOnlineExprience(exp).subscribe(res => {
      console.log(res);
      // bnswy model b el id rag3 mn backend
      exp.onlineExperienceID = (res as ApiResponse).data.onlineExperienceID;
      this.isVisible = true;
      // bnb3t el id dh 3lshan ytb3t f sora 3lshan y3del
      this.ID = exp.onlineExperienceID;
      console.log(this.ID);
    });
  }

  selectImage(event: any): void{
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      const file = event.target.files[0];
      // this.form.get('userImage').setValue(file);
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
    formData.append('onlineExperienceImage', this.image);
    this._OnlineExperienceService.uploadImage(this.ID, formData).subscribe(res => {
      console.log(res);
      if ( (res as ApiResponse).success === true){
        this._router.navigateByUrl('/online-experience/confirmOnlineExperience');
      }else{
        alert((res as ApiResponse).message);
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
