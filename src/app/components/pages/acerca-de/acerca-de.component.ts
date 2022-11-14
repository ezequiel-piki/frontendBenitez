import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../model/persona';
import { PersonaService } from '../../../services/persona.service';
import { TokenService } from '../../../auth/services/token.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styles: [
    `.img-perfil{
      height:135px;
      width:155px;
    }`
  ]
})
export class AcercaDeComponent implements OnInit {

  persona: Persona = null;

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona() {
    this.personaService.getPersonaById(1).subscribe(data => {
      this.persona = data;
    })
  }



}


