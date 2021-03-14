import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private _apiService: ApiService) { }

  addExp(exp: any)
  {
    return this._apiService.postWithToken('experiences', exp);
  }

  getuserExp()
  {
    return this._apiService.get('experiences/userExp');
  }
  getAllExperiences()
  {
    return this._apiService.get('experiences/allExperiences')
  }

  editUserExperience(experience: any)
  {
    return this._apiService.put(`experiences/${experience.experienceID}`, experience);
  }

  getExperienceById(id: number)
  {
    return this._apiService.get(`experiences/${id}`);
  }
  deleteExperience(id: number)
  {
    return this._apiService.delete(`experiences/${id}`);
  }

  reserveExperience(data: any)
  {
    return this._apiService.postWithToken(`experience/reserve`, data);
  }

  getReserveExperience()
  {
    return this._apiService.get('experience/reserve/reservedExperience');
  }

  getReservedExperienceById(id: number)
  {
    return this._apiService.get(`experience/reserve/${id}`);
  }

  deleteReserveExperience(id: number)
  {
    return this._apiService.delete(`experience/reserve/${id}`);
  }

  uploadImage(id: number, image: any){
    return this._apiService.put(`experiences/photo/${id}`, image);
  }
}
