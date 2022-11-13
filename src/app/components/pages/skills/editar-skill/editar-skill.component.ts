import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../../../../model/skill';
import { SkillService } from '../../../../services/skill.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: []
})
export class EditarSkillComponent implements OnInit {

  skill: Skill = null;

  constructor(private skillService: SkillService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.skillService.getSkillById(id).subscribe(

      data => {
        this.skill = data
      },
      err => {
        console.log(err);
        alert("Error al modificar");
        this.router.navigate(['portfolio/skills']);
      }
    )
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];

    this.skillService.updateSkill(id, this.skill).subscribe(

      data => {
        this.router.navigate(['portfolio/skills']);
      },
      err => {
        console.log(err);
        alert('Error al modificar skill');
        this.router.navigate(['portfolio/skills']);
      })
  }
}
