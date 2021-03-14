import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OnlineExperienceService } from 'src/app/services/online-experience.service';

@Component({
  selector: 'app-change-image',
  templateUrl: './change-image.component.html',
  styleUrls: ['./change-image.component.css']
})
export class ChangeImageComponent implements OnInit {
  image: null;
  url: any;
  ID: number;
  constructor(private _OnlineExperienceService:OnlineExperienceService, private _activatedRoute:ActivatedRoute,private _formBuilder:FormBuilder, private _router:Router) { }
  form: FormGroup;

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      placeImage: ['']
    });
    this._activatedRoute.paramMap.subscribe(params => {
      this.ID=+params.get('id');
    });
  }

  selectImage(event: any) {
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

  start(){
    const formData = new FormData();
    formData.append('onlineExperienceImage',this.image);
    this._OnlineExperienceService.uploadImage(this.ID, formData).subscribe(res => {
      console.log(res);
      this._router.navigateByUrl('online-experience/myOnlineExperiences');
    });
  }
}
