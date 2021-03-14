import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../../models/ApiResponse';
import { User } from '../../models/user';
import { SharedService } from './../../../services/shared.service';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isLogged:Boolean
  constructor(private _sharedService:SharedService) { }

  ngOnInit(): void {
     this.isLogged=this._sharedService.isLogged();
     this._sharedService.getLoggedStatus().subscribe(status=>{
      this.isLogged=status;
    });
    
  }

}
