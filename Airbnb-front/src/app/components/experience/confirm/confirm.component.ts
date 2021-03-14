import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ApiResponse } from '../../models/ApiResponse';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  userName:string
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getProfile().subscribe(res=>{
      let foundUser=(res as ApiResponse).data
      this.userName=foundUser.firstName
    })
    
  }

}
