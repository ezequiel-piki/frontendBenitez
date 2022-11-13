import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',

})
export class EditarEducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(private educacionService: EducacionService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.educacionService.getEducacionById(id).subscribe(

      data => {
        this.educacion = data
      },
      err => {
        console.log(err);
        alert("Error al modificar");
        this.router.navigate(['portfolio/educacion']);
      }
    )
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];

    this.educacionService.updateEducacion(id, this.educacion).subscribe(

      data => {
        this.router.navigate(['portfolio/educacion']);
      },
      err => {
        console.log(err);
        alert('Error al modificar educacion');
        this.router.navigate(['portfolio/educacion']);
      })
  }

}
