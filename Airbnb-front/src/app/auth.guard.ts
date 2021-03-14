import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _sharedService:SharedService,private _router:Router){​​​​}​​​​

  canActivate(

    next: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): boolean{​​​​

      let isLogged=this._sharedService.isLogged();

      if(!isLogged)

      {​​​​

        this._router.navigateByUrl("/user/login");

        return false;

      }​​​​

       



    return true;;

  }​​​​
}
