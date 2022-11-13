import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/services/image.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: []
})
export class EditarProyectoComponent implements OnInit {

  proyecto: Proyecto = null;

  constructor(private activatedRoute: ActivatedRoute, private proyectoService: ProyectoService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.proyectoService.getProyectoById(id).subscribe(

      data => {
        this.proyecto = data
      },
      err => {
        console.log(err);
        alert("Error al modificar");
        this.router.navigate(['portfolio/proyectos']);
      }
    )

  }



  onUpdate(): void {

    const id = this.activatedRoute.snapshot.params['id'];


    this.proyectoService.updateProyecto(id, this.proyecto).subscribe(

      data => {
        this.router.navigate(['portfolio/proyectos']);
      },
      err => {
        console.log(err);
        alert('Error al modificar proyecto');
        this.router.navigate(['portfolio/proyectos']);
      })

  }

  uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];

    this.imageService.uploadImageProyecto($event);
  }

}
