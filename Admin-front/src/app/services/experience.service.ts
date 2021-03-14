import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Experience } from './../components/models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private _apiService:ApiService) { }
  getAllExperiences(){
    return this._apiService.get('experiences/allExperiences')
  }
  editExperience(experience:any){
    return this._apiService.put(`experiences/${experience.experienceID}`,experience)
  }
  getAllOnlineExperiences(){
    return this._apiService.get('onlineExperiences/allOnlineExperiences')
  }

  editOnlineExperience(experience:any){
    return this._apiService.put(`onlineExperiences/${experience.onlineExperienceID}`,experience)
  }
}
