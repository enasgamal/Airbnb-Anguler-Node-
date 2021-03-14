import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged : Boolean
  constructor(private _sharedService : SharedService) { }

  ngOnInit(): void {
    this.isLogged = this._sharedService.isLogged();
    this._sharedService.getLoggedStatus().subscribe(status=>{
     this.isLogged = status;
   });
  }
  
}
