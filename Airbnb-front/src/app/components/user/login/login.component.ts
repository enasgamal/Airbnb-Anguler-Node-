import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from '../../models/ApiResponse';
import { User } from '../../models/user';
import { UserService } from './../../../services/user.service';
import { SharedService } from './../../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup
  constructor(private _formBuilder:FormBuilder , private _userService:UserService, private _router:Router,private _sharedService:SharedService) { }

  ngOnInit(): void {
    this.form=this._formBuilder.group({
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required]]
    })
  };
  
signIn(){
  let user:User=new User();
  user=this.form.value
  console.log(user)
  this._userService.login(user).subscribe(res=>{
    console.log((res as ApiResponse).success);
    if((res as ApiResponse).success ===true){
      this._sharedService.login((res as ApiResponse).token);
      this._router.navigateByUrl('/')
    }else{
      alert((res as ApiResponse).message)
    }
  })
}
}
