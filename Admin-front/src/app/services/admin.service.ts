import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _apiService:ApiService) { }
  login(user:any){
    return this._apiService.post('user/login',user)
  }
  
}
