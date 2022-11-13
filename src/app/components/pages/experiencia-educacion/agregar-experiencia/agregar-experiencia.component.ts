import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExpLaboralService } from '../../../../services/exp-laboral.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: []
})
export class AgregarExperienciaComponent implements OnInit {
  name: string = '';
  descripcion: string = '';

  constructor(private experienciaService: ExpLaboralService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const experiencia = new Experiencia(this.name, this.descripcion);
    this.experienciaService.crearExperiencia(experiencia).subscribe(
      data => {
        alert('experiencia añadida');
        this.router.navigate(['/portfolio/experiencia']);
      }, err => {
        alert('Error');
        console.log(err);
        this.router.navigate(['/portfolio/agregarExp']);
      })
  }
}
