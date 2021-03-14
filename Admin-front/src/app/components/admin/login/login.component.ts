import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { SharedService } from 'src/app/services/shared.service';
import { Admin } from '../../models/admin';
import { ApiResponse } from '../../models/apiResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup
  constructor(private _formBuilder:FormBuilder , private _adminService:AdminService, private _router:Router,private _sharedService:SharedService) { }

  ngOnInit(): void {
    this.form=this._formBuilder.group({
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required]]
    })
  };

  signIn(){
    let admin:Admin=new Admin();
    admin=this.form.value
    console.log(admin)
    this._adminService.login(admin).subscribe(res=>{
      console.log((res as ApiResponse).success);
      if((res as ApiResponse).success ===true){
        this._sharedService.login((res as ApiResponse).token);
        this._router.navigateByUrl('dashboard')
      }else{
        alert((res as ApiResponse).message)
      }
    })
  }

}
