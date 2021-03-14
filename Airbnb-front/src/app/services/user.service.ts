import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import{User} from '.././components/models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _apiService:ApiService) { }
  create(user:any){
    return this._apiService.post('user/register',user)
  }
  login(user:any){
    return this._apiService.post('user/login',user)
  }
  getProfile(){
    return this._apiService.get('user/profile')
  }
  updateUser(user:User){
    return this._apiService.put(`user/profile/${user.userID}`,user)
  }
  uploadImage(id:number,image:any){
    return this._apiService.put(`user/profile/photo/${id}`,image)
  }
}
