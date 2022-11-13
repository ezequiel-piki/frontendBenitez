import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Experiencia } from 'src/app/model/experiencia';
import { ExpLaboralService } from 'src/app/services/exp-laboral.service';
import { TokenService } from '../../../auth/services/token.service';




@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html'

})
export class ExperienciaEducacionComponent implements OnInit {


  experiencia: Experiencia[] = [];


  constructor(private experienciaService: ExpLaboralService, private router: Router, private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {

    this.cargarExperiencia();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }


  }

  cargarExperiencia(): void {
    this.experienciaService.obtenerDatos().subscribe(data => {
      console.log(data)
      this.experiencia = data;

    });

  }

  delete(id?: number) {

    if (id != undefined) {

    }

    this.experienciaService.delete(id).subscribe(data => {
      this.cargarExperiencia();
    }, err => {
      console.log(err);
      alert('no se pudo borrar la experiencia');
    })

  }

  /* editar(experiencia: Experiencia) {
    /*  this.router.navigate(['portfolio/editar']); */
  //this.experienciaService.obtenerHabilidadPorId(habilidad.id).subscribe(exp => {
  // this.experiencia = habilidad;
  //})

  //} */


}
