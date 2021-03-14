import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostService } from 'src/app/services/host.service';
import { ApiResponse } from '../../models/ApiResponse';
import { Host } from '../../models/host';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,private _hostService:HostService) { }
countryName:string;
places:Host[]=[];
cities=[];
isLoaded:boolean=false
pageNumber:number=4;
currentPg:number=1;
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params=>{
      this.countryName=params.get('location')
      this._hostService.getAllHosts().subscribe(res=>{
        console.log((res as ApiResponse).data)
        let foundHosts = (res as ApiResponse).data
        console.log(foundHosts.length)
        for(let i=0;i<foundHosts.length;i++){
          console.log(foundHosts[i].address)
          this.places.push(foundHosts[i])
        }
        console.log(this.places);
        console.log(this.countryName)
        for(let i=0;i<this.places.length;i++){
          console.log(this.places[i].hostStatus)
          if(this.places[i].hostStatus==="Approve" &&this.places[i].address===this.countryName){
            this.cities.push(this.places[i])
          }
        };
        console.log(this.cities);
        this.isLoaded=true
      })
      
    });
   
  }
}
