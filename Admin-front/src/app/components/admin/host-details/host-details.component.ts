import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from '../../models/apiResponse';
import { Host } from '../../models/host';
import { HostService } from './../../../services/host.service';

@Component({
  selector: 'app-host-details',
  templateUrl: './host-details.component.html',
  styleUrls: ['./host-details.component.css']
})
export class HostDetailsComponent implements OnInit {
  hostID:number;
  host:Host=new Host()
  constructor(private _activatedRoute:ActivatedRoute,private _hostService:HostService) { }

  ngOnInit(): void {​​
    console.log("ggggggggggggggggggggddd")
    console.log(this.hostID)
    this._activatedRoute.paramMap.subscribe(params=>{​​
    this.hostID=+params.get('id')
    this._hostService.getHostById(this.hostID).subscribe((response:ApiResponse)=>{​​
    this.host=response.data
    console.log(this.host)
    console.log("gggggggggggggggggggg")

        // this.updateHost()

        

      }​​)

    }​​);

   

  }​​

}
