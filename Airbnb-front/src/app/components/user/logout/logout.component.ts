import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './../../../services/shared.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _sharedService:SharedService,private _router:Router) { }

  ngOnInit(): void {
    this._sharedService.logout();
    this._router.navigateByUrl('/')
  }

}
