import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { getMaxListeners } from 'process';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private routes: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const admin = localStorage.getItem('email');
    
     if (admin == "chaima@gmail.com"){
        console.log("yyzyz",admin)
        
        this.routes.navigate(['/table-list']);
        this.routes.navigate(['/typography']);
    }
   
    this.routes.navigate(['/dashboard']);
    return false;

  }

}