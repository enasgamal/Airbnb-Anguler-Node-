import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  logged=new Subject<boolean>();
  constructor() { 
    this.logged.next(this.isLogged());
  }
  login(token:string){
    localStorage.setItem("token",`=${token}`);
    // this.logged.next(true);
    this.setLoggedStatus(true)
  }
  logout(){
    localStorage.removeItem("token");
    // this.logged.next(false);
    this.setLoggedStatus(false)
  }
  getLoggedStatus(){
    return this.logged.asObservable();
  };
  setLoggedStatus(status:boolean)
  {
    this.logged.next(status);
  };
  isLogged():boolean
  {
    let token=localStorage.getItem("token");
    if(token==null)
      return false;

      return true;
  };
  addToken(token:string)
  {
    localStorage.setItem("token",token);
  }
  getToken()
  {
   return localStorage.getItem("token");
  }

}
