import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from '../../models/ApiResponse';
import { Host } from '../../models/host';
import { HostService } from './../../../services/host.service';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
form:FormGroup;
hostID:number
host:Host=new Host();
isLoaded:boolean=false
  constructor(private _activatedRoute:ActivatedRoute, private _hostService:HostService,private _router:Router,private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params=>{
      this.hostID=+params.get('id')
      this._hostService.getHostById(this.hostID).subscribe((response:ApiResponse)=>{
        this.host=response.data
        console.log(this.host)
        this.isLoaded=true
         this.updateHost()
        
      })
    });
   
  }
updateHost(){
  this.form=this._formBuilder.group({
    address:[this.host.address,[Validators.required]],
    propertyType:[this.host.propertyType,[Validators.required]],
    numberOfGuests:[this.host.numberOfGuests,[Validators.required]],
    numberOfBedrooms:[this.host.numberOfBedrooms,[Validators.required]],
    numberOfBathrooms:[this.host.numberOfBathrooms,[Validators.required]],
    totalPrice:[this.host.totalPrice,[Validators.required]],
    description:[this.host.description,[Validators.required]],
    activities:[this.host.activities]
  })
}
update(){
  let updatedHost=new Host ();
  updatedHost=this.form.value;
  updatedHost.hostID=this.host.hostID
  console.log(updatedHost)
  this._hostService.editHost(updatedHost).subscribe((response:ApiResponse)=>{
    if((response as ApiResponse).success===true){
      this.host=updatedHost;
      console.log(this.host)
      this._router.navigateByUrl("/hosting/listing")
    }else{
      alert((response as ApiResponse).message)
    }
  })
  
}

}
