import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from '../../models/ApiResponse';
import { PlaceService } from './../../../services/place.service';

@Component({
  selector: 'app-clients-reservations',
  templateUrl: './clients-reservations.component.html',
  styleUrls: ['./clients-reservations.component.css']
})
export class ClientsReservationsComponent implements OnInit {
tripNumber:number;   
trips=[];
isLoaded:boolean=false
  constructor(private _activatedRoute:ActivatedRoute,private _placeService:PlaceService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params=>{
      this.tripNumber=+params.get('id');
      this._placeService.getReservedTrips(this.tripNumber).subscribe(res=>{
       console.log((res as ApiResponse).data)
       this.trips.push((res as ApiResponse).data)
       console.log(this.trips[0]);
       this.isLoaded=true
   })
       
  }
  )}

}
