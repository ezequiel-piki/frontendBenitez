import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/auth/services/token.service';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = []

  constructor(private tokenService: TokenService, private proyectoService: ProyectoService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.proyectoService.getProyectos().subscribe(data => {
      console.log(data);
      this.proyectos = data;
    })
  }

  delete(id: number) {

    if (id != undefined) {
      this.proyectoService.delete(id).subscribe(data => {
        this.cargarProyectos();
      }, err => {
        alert('no se pudo borrar proyecto')
      })
    }
  }

}
