import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { SharedService } from './shared.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient , private _sharedService:SharedService) { }
  post(url:string,body:any){
    return this._httpClient.post(`${environment.apiURL}/${url}`,body,{headers:{"Content-Type":"application/json"}})
  }
  get(url:string){
    return this._httpClient.get(`${environment.apiURL}/${url}`,{headers:{"authorization":this._sharedService.getToken()}})
  }
  getId(url:string){
    return this._httpClient.get(`${environment.apiURL}/${url}`,{headers:{"authorization":this._sharedService.getToken()}})
  }
  put(url:string,body:any){
    return this._httpClient.put(`${environment.apiURL}/${url}`,body,{headers:{"authorization":this._sharedService.getToken()}})
  }
  postImage(url:string,body:any){
    return this._httpClient.post(`${environment.apiURL}/${url}`,body,{headers:{"Content-Type":"Application/json"}})
  }
  postWithToken(url:string,body:any){
    return this._httpClient.post(`${environment.apiURL}/${url}`,body,{headers:{"authorization":this._sharedService.getToken()}})
  }
  delete(url:string){
    return this._httpClient.delete(`${environment.apiURL}/${url}`,{headers:{"authorization":this._sharedService.getToken()}})
  }
}
