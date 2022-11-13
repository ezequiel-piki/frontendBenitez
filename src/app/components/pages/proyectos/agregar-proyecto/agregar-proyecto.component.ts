import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/services/image.service';
import { ProyectoService } from '../../../../services/proyecto.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',

})
export class AgregarProyectoComponent implements OnInit {

  nombreP: string;
  descripcion: string;


  constructor(private activatedRoute: ActivatedRoute, private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(): void {



    const proyecto = new Proyecto(this.nombreP, this.descripcion);

    this.proyectoService.saveProyecto(proyecto).subscribe(

      data => {
        alert('Proyecto añadido');
        this.router.navigate(['portfolio/proyectos']);
      },

      err => {
        console.log(err);
        alert('Error');
        this.router.navigate(['portfolio/proyectos']);
      }
    );
  }



  /*   uploadImageProyecto($event: any) {
      //const id = this.activatedRoute.snapshot.params['id'];

      //const name = $event.target.files[0].name;
      console.log(name);
      console.log($event);

      //console.log("el nombre es:", name);
      this.imageService.uploadImageProyecto($event);
    } */

}
