import { Component, OnInit } from '@angular/core';
import { ActivationEnd, ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/services/image.service';
import { PersonaService } from '../../../../services/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: []
})
export class EditAcercaDeComponent implements OnInit {

  persona: Persona = null;

  constructor(private activatedRoute: ActivatedRoute, private personaService: PersonaService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.personaService.getPersonaById(id).subscribe(

      data => {
        this.persona = data
      },
      err => {
        console.log(err);
        alert("Error al modificar persona");
        this.router.navigate(['portfolio/acerca-de-mi']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.persona.img = this.imageService.url;

    this.personaService.updatePersona(id, this.persona).subscribe(

      data => {
        this.router.navigate(['portfolio/acerca-de-mi']);
      },
      err => {
        console.log(err);
        alert('Error al modificar persona');
        this.router.navigate(['portfolio/acerca-de-mi']);
      })

  }

  uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.imageService.uploadImage($event, name);
  }
}
