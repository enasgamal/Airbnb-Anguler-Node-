import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SharedService } from 'src/app/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(private _apiService:ApiService) { }
  getHost(){
    return this._apiService.get('host/allHosts')
  }
 
  getHostById(id:number){
    return this._apiService.getId(`host/${id}`)
  }
  editHost(host:any){
    return this._apiService.put(`host/${host.hostID}`,host)
  }
  deleteHost(id:number){
    return this._apiService.delete(`host/${id}`)
  }
  getAllHosts(){
    return this._apiService.get('host/allHosts')
  }
}
