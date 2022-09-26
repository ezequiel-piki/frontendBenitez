import { NgModule,} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperienciaEducacionComponent } from './pages/experiencia-educacion/experiencia-educacion.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HomeComponent } from './home/home.component';


const routes : Routes = [{
  path:'', component:HomeComponent, children:[
    { path:'experiencia' ,component:ExperienciaEducacionComponent},
    { path:'acerca-de-mi',component:AcercaDeComponent},
    { path:'proyectos'   ,component:ProyectosComponent},
    { path:'skills'      ,component:SkillsComponent},
    { path:'**',redirectTo:'acerca-de-mi',}]
}]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PortfolioRoutingModule { }
