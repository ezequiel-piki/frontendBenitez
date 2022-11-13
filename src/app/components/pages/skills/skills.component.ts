
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from '../../../auth/services/token.service';

import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  providers: [NgbProgressbarConfig]
})
export class SkillsComponent implements OnInit {

  skill: Skill[] = []

  constructor(private config: NgbProgressbarConfig, private skillService: SkillService, private tokenService: TokenService) {
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'info';
    config.height = '20px';
  }


  isLogged = false;


  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }



  cargarSkills(): void {
    this.skillService.lista().subscribe(data => {
      console.log(data);
      this.skill = data;
    })
  }

  delete(id: number) {

    if (id != undefined) {
      this.skillService.delete(id).subscribe(data => {
        this.cargarSkills();
      }, err => {
        alert('no se pudo borrar la skill')
      })
    }
  }

}
