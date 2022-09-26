import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/auth/services/token.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent  {

  constructor(private tokenService:TokenService,private router : Router) { }

  logout(){
    this.tokenService.logOut();
    this.router.navigate(['./auth'])
    console.log('logout')
  }

}
