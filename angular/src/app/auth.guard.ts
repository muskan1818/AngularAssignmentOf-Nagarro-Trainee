import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:ApiserviceService,private _router:Router){}

  canActivate():boolean
  {
    if(this._authService.loggedIn())
    {
      return true
    }
    else
    {
      this._router.navigate(['/'])
      return false
    }
  }
}
