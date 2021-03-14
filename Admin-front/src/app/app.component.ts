import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';
  isLogged:boolean=false;
  constructor( private _sharedService:SharedService) { }
  ngOnInit(): void {
    this.isLogged=this._sharedService.isLogged();
     this._sharedService.getLoggedStatus().subscribe(status=>{
      this.isLogged=status;
    })
  }
  
}


