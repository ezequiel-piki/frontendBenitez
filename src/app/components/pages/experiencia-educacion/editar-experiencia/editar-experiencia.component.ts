import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../../../../model/experiencia';
import { ExpLaboralService } from '../../../../services/exp-laboral.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: []
})
export class EditarExperienciaComponent implements OnInit {
  experienciaLaboral: Experiencia = null;

  constructor(private experienciaService: ExpLaboralService, private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.obtenerExperienciaById(id).subscribe(
      data => {
        this.experienciaLaboral = data;
      }, err => {
        alert('Error al modificar experiencia');
        this.router.navigate(['/portfolio/experiencia'])
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.updateExperiencia(id, this.experienciaLaboral).subscribe(
      data => {
        this.router.navigate(['/portfolio/experiencia'])
      }, err => {
        alert('Error al modificar experiencia');
        this.router.navigate(['/portfolio/experiencia'])
      }
    )
  }

}
