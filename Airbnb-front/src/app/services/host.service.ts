import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(private _apiService:ApiService) { }
  addHost(data:any){
    return this._apiService.postWithToken('host',data)
  }
  getHost(){
    return this._apiService.get('host/hostUser')
  }
  getAllHosts(){
    return this._apiService.get('host/allHosts')
  }
  deleteHost(id:number){
    return this._apiService.delete(`host/${id}`)
  }
  editHost(host:any){
    return this._apiService.put(`host/${host.hostID}`,host)
  }
  getHostById(id:number){
    return this._apiService.getId(`host/${id}`)
  }
  uploadImage(id:number,image:any){
    return this._apiService.put(`host/photo/${id}`,image)
  }
}
