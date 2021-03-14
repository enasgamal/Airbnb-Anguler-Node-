import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OnlineExperienceService {

  constructor(private _apiService:ApiService) { }

  addOnlineExprience(exp: any)
  {
    return this._apiService.postWithToken('onlineExperiences', exp);
  }

  getUserOnlineExprience()
  {
    return this._apiService.get('onlineExperiences/userOnlineExperience');
  }
  getAllOnlineExpriences()
  {
    return this._apiService.get('onlineExperiences/allOnlineExperiences');
  }

  editUserOnlineExprience(onlineExperience: any)
  {
    return this._apiService.put(`onlineExperiences/${onlineExperience.onlineExperienceID}`, onlineExperience);
  }

  getOnlineExprienceById(id: number)
  {
    return this._apiService.get(`onlineExperiences/${id}`);
  }
  deleteOnlineExprience(id: number)
  {
    return this._apiService.delete(`onlineExperiences/${id}`);
  }

  interestedInOnlineExperience(data:any)
  {

    return this._apiService.postWithToken(`interestedInOnlineExperience/`, data);
  }

  getinterestedInOnlineExperiencesOfUser()
  {
    return this._apiService.get('interestedInOnlineExperience/user/onlineExperiences');
  }

  
  getinterestedInOnlineExperienceById(id: number)
  {
    return this._apiService.get(`interestedInOnlineExperience/interestedIn/${id}`);
  }

  deleteInterestedInOnlineExperience(id:Number)
  {
    return this._apiService.delete(`interestedInOnlineExperience/${id}`);
  }

  uploadImage (id: number, image: any){
    return this._apiService.put(`onlineExperiences/photo/${id}`, image);
  }
}
