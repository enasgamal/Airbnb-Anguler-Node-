import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from '../../models/ApiResponse';
import { User } from '../../models/user';
import { UserService } from './../../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
userID:number;
user:User=new User()
form:FormGroup;
isLoaded:boolean=false
  constructor(private _activatedRoute:ActivatedRoute, private _userService:UserService,private _formBuilder:FormBuilder ,private _router:Router) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params=>{
      this.userID=+params.get('id')
      this._userService.getProfile().subscribe((response:ApiResponse)=>{
        this.user=response.data
        console.log(this.user);
        this.isLoaded=true
        this.postUsers()
        
      })
    });
   
  }
postUsers(){
  this.form=this._formBuilder.group({
    firstName:[this.user.firstName,[Validators.required]],
    lastName:[this.user.lastName,[Validators.required]],
    age:[this.user.age,[Validators.required]],
    mobile:[this.user.mobile,[Validators.required]],
    email:[this.user.email,[Validators.required,Validators.email]],
    password:[this.user.password,[Validators.required]],
    gender:[this.user.gender,[Validators.required]],
  })
}
updateUser(){
  let updatedUser=new User();
  updatedUser=this.form.value;
  updatedUser.userID=this.user.userID
  console.log(updatedUser, this.user)
  this._userService.updateUser(updatedUser).subscribe((response:ApiResponse)=>{
    if((response as ApiResponse).success===true){
      this.user=updatedUser;
      console.log(this.user)
      this._router.navigateByUrl("/user/profile")
    }else{
      alert((response as ApiResponse).message)
    }
  })
}
}
