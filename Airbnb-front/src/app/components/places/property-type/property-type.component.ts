import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostService } from 'src/app/services/host.service';
import { ApiResponse } from '../../models/ApiResponse';
import { Host } from '../../models/host';

@Component({
  selector: 'app-property-type',
  templateUrl: './property-type.component.html',
  styleUrls: ['./property-type.component.css']
})
export class PropertyTypeComponent implements OnInit {

  pageNumber:number=4;
currentPg:number=1;
  constructor(private _activatedRoute:ActivatedRoute,private _hostService:HostService) { }
  propertyType:string;
  places:Host[]=[];
  propertyTypes=[];
  isLoaded:boolean=false
    ngOnInit(): void {
      this._activatedRoute.paramMap.subscribe(params=>{
        this.propertyType=params.get('type')
        this._hostService.getAllHosts().subscribe(res=>{
          console.log((res as ApiResponse).data)
          let foundHosts = (res as ApiResponse).data
          console.log(foundHosts.length)
          for(let i=0;i<foundHosts.length;i++){
            console.log(foundHosts[i].propertyType)
            this.places.push(foundHosts[i])
          }
          console.log(this.places);
          console.log(this.propertyType)
          for(let i=0;i<this.places.length;i++){
            console.log(this.places[i].hostStatus)
            if(this.places[i].hostStatus==="Approve" &&this.places[i].propertyType===this.propertyType ){
              this.propertyTypes.push(this.places[i])
            }
          };
          console.log(this.propertyTypes)
          this.isLoaded=true
        })
        
      });
     
    }

}
