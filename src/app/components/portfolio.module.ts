import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ExperienciaEducacionComponent } from './pages/experiencia-educacion/experiencia-educacion.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EditarExperienciaComponent } from './pages/experiencia-educacion/editar-experiencia/editar-experiencia.component';
import { AgregarExperienciaComponent } from './pages/experiencia-educacion/agregar-experiencia/agregar-experiencia.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarSkillComponent } from './pages/skills/agregar-skill/agregar-skill.component';
import { EditarSkillComponent } from './pages/skills/editar-skill/editar-skill.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditAcercaDeComponent } from './pages/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { EditarEducacionComponent } from './pages/educacion/editar-educacion/editar-educacion.component';
import { AgregarEducacionComponent } from './pages/educacion/agregar-educacion/agregar-educacion.component';
import { EditarProyectoComponent } from './pages/proyectos/editar-proyecto/editar-proyecto.component';
import { AgregarProyectoComponent } from './pages/proyectos/agregar-proyecto/agregar-proyecto.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';






@NgModule({
  declarations: [
    AcercaDeComponent,
    SkillsComponent,
    ExperienciaEducacionComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    EditarExperienciaComponent,
    AgregarExperienciaComponent,
    AgregarSkillComponent,
    EditarSkillComponent,
    EditAcercaDeComponent,
    EducacionComponent,
    EditarEducacionComponent,
    AgregarEducacionComponent,
    EditarProyectoComponent,
    AgregarProyectoComponent,
    ProyectosComponent


  ],
  imports: [
    CommonModule, PortfolioRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule, NgbModule
  ]
})
export class PortfolioModule { }
