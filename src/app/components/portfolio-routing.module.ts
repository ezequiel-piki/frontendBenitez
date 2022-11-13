import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperienciaEducacionComponent } from './pages/experiencia-educacion/experiencia-educacion.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HomeComponent } from './home/home.component';
import { EditarExperienciaComponent } from './pages/experiencia-educacion/editar-experiencia/editar-experiencia.component';
import { AgregarExperienciaComponent } from './pages/experiencia-educacion/agregar-experiencia/agregar-experiencia.component';
import { AgregarSkillComponent } from './pages/skills/agregar-skill/agregar-skill.component';
import { EditarSkillComponent } from './pages/skills/editar-skill/editar-skill.component';
import { EditAcercaDeComponent } from './pages/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { AgregarEducacionComponent } from './pages/educacion/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './pages/educacion/editar-educacion/editar-educacion.component';
import { EditarProyectoComponent } from './pages/proyectos/editar-proyecto/editar-proyecto.component';
import { AgregarProyectoComponent } from './pages/proyectos/agregar-proyecto/agregar-proyecto.component';



const routes: Routes = [{
  path: '', component: HomeComponent,
  children: [
    { path: 'editarProyecto/:id', component: EditarProyectoComponent },
    { path: 'agregarProyecto', component: AgregarProyectoComponent },
    { path: 'editarEdu/:id', component: EditarEducacionComponent },
    { path: 'agregarEdu', component: AgregarEducacionComponent },
    { path: 'editPersona/:id', component: EditAcercaDeComponent },
    { path: 'editSkill/:id', component: EditarSkillComponent },
    { path: 'agregarSkill', component: AgregarSkillComponent },
    { path: 'agregarExp', component: AgregarExperienciaComponent },
    { path: 'editarExp/:id', component: EditarExperienciaComponent },
    { path: 'experiencia', component: ExperienciaEducacionComponent },
    { path: 'educacion', component: EducacionComponent },
    { path: 'acerca-de-mi', component: AcercaDeComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'skills', component: SkillsComponent },
    { path: '**', redirectTo: 'acerca-de-mi', }]
}]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
