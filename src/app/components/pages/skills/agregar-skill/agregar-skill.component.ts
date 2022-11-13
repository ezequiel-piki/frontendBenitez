import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from '../../../../services/skill.service';

@Component({
  selector: 'app-agregar-skill',
  templateUrl: './agregar-skill.component.html',
  styleUrls: []
})
export class AgregarSkillComponent implements OnInit {

  nombre: string;
  porcentaje: number;

  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillService.saveSkill(skill).subscribe(
      data => {
        alert('Skill añadida');
        this.router.navigate(['portfolio/skills']);
      }, err => {
        alert('Error');
        console.log(err);
        this.router.navigate(['portfolio/skills']);
      }
    );
  }

}
