import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HostService } from 'src/app/services/host.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
image:null;
url:any;
ID:number
  constructor(private _hostService:HostService,private _activatedRoute:ActivatedRoute,private _formBuilder:FormBuilder, private _router:Router) { }
form:FormGroup
  ngOnInit(): void {
    this.form=this._formBuilder.group({
      hostImage:['']
    })
    this._activatedRoute.paramMap.subscribe(params=>{
      this.ID=+params.get('id')
      
    });
  }

  selectImage(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      const file=event.target.files[0];
      // this.form.get('userImage').setValue(file);
      this.image=file
      reader.readAsDataURL(event.target.files[0]);
      console.log(file)
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  
  }
  start(){
    const formData=new FormData();
    formData.append('hostImage',this.image);
    this._hostService.uploadImage(this.ID,formData).subscribe(res=>{
      console.log(res);
      this._router.navigateByUrl('hosting/listing');
      
    })
  
    
  }  
}
