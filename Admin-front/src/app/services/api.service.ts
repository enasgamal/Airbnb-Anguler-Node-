import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedService } from 'src/app/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient,private _sharedService:SharedService) { }
  get(url:string){
    return this._httpClient.get(`${environment.apiURL}/${url}`,{​​​​headers:{​​​​"authorization":this._sharedService.getToken()}​​​​}​​​​)
  }
  post(url:string,body:any){
    return this._httpClient.post(`${environment.apiURL}/${url}`,body,{headers:{"Content-Type":"application/json"}})
  }
  getId(url:string){​​
    return this._httpClient.get(`${​​environment.apiURL}​​/${​​url}​​`,{​​headers:{​​"authorization":this._sharedService.getToken()}​​}​​)
  }​​
  put(url:string,body:any){
    return this._httpClient.put(`${environment.apiURL}/${url}`,body,{headers:{"authorization":this._sharedService.getToken()}})
  }
  delete(url:string){
    return this._httpClient.delete(`${environment.apiURL}/${url}`,{headers:{"authorization":this._sharedService.getToken()}})
  }

  
}
