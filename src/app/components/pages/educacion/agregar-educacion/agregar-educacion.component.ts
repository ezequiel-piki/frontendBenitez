import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from '../../../../services/educacion.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',

})
export class AgregarEducacionComponent implements OnInit {

  nombre: string;
  descripcion: string;


  constructor(private router: Router, private educacionService: EducacionService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const educacion = new Educacion(this.nombre, this.descripcion);
    this.educacionService.saveEducacion(educacion).subscribe(
      data => {
        alert('Educacion añadida');
        this.router.navigate(['portfolio/educacion']);
      }, err => {
        console.log(err);
        alert('Error');
        this.router.navigate(['portfolio/educacion']);
      }
    );
  }


}
