import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../../models/apiResponse';
import { HostService } from '../../../services/host.service';
import { Host } from './../../models/host';

@Component({
  selector: 'app-host-lists',
  templateUrl: './host-lists.component.html',
  styleUrls: ['./host-lists.component.css']
})
export class HostListsComponent implements OnInit {
hosts=[];
Approved="Approve";
Declined="Decline"
  constructor(private _hostService:HostService) { }

  ngOnInit(): void {
    this._hostService.getHost().subscribe(res =>{
      console.log((res as ApiResponse).data);
      let currentHost=(res as ApiResponse).data;
      this.hosts.push(currentHost);
      console.log(this.hosts[0][0]);
    })
    

  }
  decline(id:number)
  {
    let newHost:Host=new Host;
    let host:Host=this.hosts[0][id];
   
    console.log(host.hostID)
    console.log(this.hosts[0], host)
    newHost=host; 
    newHost.hostStatus="Decline";
    this._hostService.editHost(newHost).subscribe((res:ApiResponse)=>{
    console.log((res as ApiResponse).data);
  })
  }
  approve(id:number)
  {
   
    let newHost:Host=new Host;
    let host:Host=this.hosts[0][id];
    console.log(host)
    console.log(this.hosts[0], host)
    newHost=host;
    newHost.hostStatus="Approve";
    this._hostService.editHost(newHost).subscribe((res:ApiResponse)=>{
    console.log((res as ApiResponse).data);

  })
  }


}