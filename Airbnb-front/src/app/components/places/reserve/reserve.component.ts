import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../../models/place';
import { PlaceService } from './../../../services/place.service';
import { ApiResponse } from './../../models/ApiResponse';
import { HostService } from 'src/app/services/host.service';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  form: FormGroup;
  hostID: number;
  hostEmail: string;
  startDate = [];
  endDate = [];
  tripPrice: any;
  tripLocation: string;
  tripNights: string;
  tripNumber: number; // to check reserved or not
  numberOfNights:any;
  isVisible:boolean=false
  tripCost:any;
  minDate: Date;
  isCalculated:boolean
  disabledDates=[] ;
  constructor(private _formBuilder: FormBuilder, private _placeService: PlaceService, private _activatedRoute: ActivatedRoute, private _hostService: HostService,private _router:Router) { 
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.hostID = +params.get('id')
      forkJoin([this._hostService.getHostById(this.hostID),this._placeService.getReservedTrips(this.hostID)]).subscribe(res=>{
        let Host=(res[0] as ApiResponse).data;
        this.hostEmail = Host.hostEmail;
        this.tripPrice = Host.totalPrice;
        this.tripLocation = Host.address;
        this.tripNights = Host.numberOfNights;
        this.tripNumber = Host.hostID;
        
        console.log(Host.hostID)
        console.log(this.tripNights, this.tripPrice, this.tripLocation, this.hostEmail, this.tripNumber);
        
        let foundTrips=(res[1] as ApiResponse).data;
        console.log(foundTrips, foundTrips[0])
         for (let i = 0; i < foundTrips.length; i++) {
          this.getDatesBetweenDates(foundTrips[i].startDate,foundTrips[i].endDate)
         }
          console.log(this.startDate, this.endDate);

      })
    });
    this.form = this._formBuilder.group({
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      apartmentNumber: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    })
  }
  confirm() {
    let place: Place = new Place()
    place = this.form.value;
    place.tripHostEmail = this.hostEmail;
    place.tripLocation = this.tripLocation;
    place.tripNights = this.numberOfNights;
    this.calculate();
    this.isCalculated=false
    place.tripPrice = this.tripCost;
    place.tripNumber = this.tripNumber
    
    console.log(place);
    

   this._placeService.postAddress(place).subscribe((res: ApiResponse) => {
     console.log(res as ApiResponse)
     if((res as ApiResponse).success==true){
       this._router.navigateByUrl('user/trips')
     }
     else{
       alert((res as ApiResponse).message)
     }
   })

  }
  getDatesBetweenDates(startDate, endDate) {
    let dates = []
    //to avoid modifying the original date
    const theDate = new Date(startDate)
    console.log(theDate)
    this.disabledDates.push(new Date(startDate));
    console.log(this.disabledDates)
    while (theDate < new  Date(endDate) ) {
      dates = [...dates, new Date(theDate)]
      let newDate=theDate.setDate(theDate.getDate() + 1)
      this.disabledDates.push(newDate);
      console.log(this.disabledDates)
    }
    return dates
  }
  // unavailableDays(calender: Date): Boolean {
  //   // console.log(calender)
  //   return calender > new Date();


  // }
  startDate1: Date;
  onValueChange1(value: Date): void {
    this.startDate1 = value;
    console.log(this.startDate1)
  }
  endDate1: Date;
  onValueChange2(value: Date): void {
    this.endDate1 = value;
    console.log(this.endDate1)
  }
  calculate()
  {
    let startDate=this.startDate1;
    console.log(startDate);
    let endDate=this.endDate1

    console.log(endDate);
    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
     this.numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    console.log(this.numberOfNights + " nights");
    this.tripCost=this.numberOfNights*this.tripPrice
    this.isVisible=true;
    this.isCalculated=true
  }
}
