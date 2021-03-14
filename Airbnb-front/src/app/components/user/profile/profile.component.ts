import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from './../../../services/user.service';
import { ApiResponse } from './../../models/ApiResponse';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:User[]=[]
url:any;
image:null;
// userImage:null;
ID:number
isVisible:boolean=false
form:FormGroup;
isLoaded:boolean=false
change(){
  if(this.user[0].userImage){
    this.isVisible=false
  }else{
    this.isVisible=true
  }
}
  constructor(private _userService:UserService,private _formBuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.form=this._formBuilder.group({
      userImage:['']
    })
    this._userService.getProfile().subscribe(res=>{
      console.log((res as ApiResponse).data)
      let currentUser=(res as ApiResponse).data
      this.user.push(currentUser)
      this.ID=this.user[0].userID;
      console.log(this.user[0].firstName, this.user[0].userImage);
      this.change();
      this.isLoaded=true
    })
  }

  upload(event:any) {
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
      // this.isVisible=true;
    }
  
  }
updateImage(){
  let userUploadImage:User= new User();
  const formData=new FormData();
  formData.append('userImage',this.image);
  console.log(formData,this.image)
  this._userService.uploadImage(this.ID,formData).subscribe(res=>{
  console.log(res);
  this.user[0].userImage=((res as ApiResponse).data).userImage
    this.changeImage();
  })
}
changeImage(){
  this.isVisible=!this.isVisible;
}
}
