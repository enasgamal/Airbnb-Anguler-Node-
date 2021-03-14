import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ApiResponse } from '../../models/ApiResponse';

@Component({
  selector: 'app-confirm-online-experience',
  templateUrl: './confirm-online-experience.component.html',
  styleUrls: ['./confirm-online-experience.component.css']
})
export class ConfirmOnlineExperienceComponent implements OnInit {
  userName: string;
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getProfile().subscribe(res => {
      let foundUser = (res as ApiResponse).data;
      this.userName = foundUser.firstName;
    });
  }
}
