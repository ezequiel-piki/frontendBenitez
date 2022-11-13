import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/auth/services/token.service';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html'
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = []

  constructor(private tokenService: TokenService, private educacionService: EducacionService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionService.lista().subscribe(data => {
      console.log(data);
      this.educacion = data;
    })
  }

  delete(id: number) {

    if (id != undefined) {
      this.educacionService.deleteEducacionById(id).subscribe(data => {
        this.cargarEducacion();
      }, err => {
        alert('no se pudo borrar Educacion')
      })
    }
  }

}
