import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/auth/services/token.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  isLogged = false;


  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  logout() {
    this.tokenService.logOut();
    window.location.reload();
    this.router.navigate(['./portfolio'])
    console.log('logout')
  }



  login() {
    this.router.navigate(['./auth']);
  }

}
