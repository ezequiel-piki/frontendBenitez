import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';

import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements  CanActivate  {
 
  constructor(private authService : AuthService, private router:Router){}
   
  
 canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> |  boolean{
      if (!this.authService.verificaAutenticacion()) {
        this.router.navigate(['/login']); // go to login if not authenticated
        return false;
      }
    return true;
    }
     

  /*  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {
      
      return this.authService.verificaAutenticacion()
      
      .pipe(tap(estaAutenticado=>{
        if(!estaAutenticado){
          this.router.navigate(['./auth/login'])
        }
      }))
      
  }  */ 
}
