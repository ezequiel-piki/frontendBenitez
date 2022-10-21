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








@NgModule({
  declarations:[
    AcercaDeComponent,
    SkillsComponent,
    ExperienciaEducacionComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,PortfolioRoutingModule,ReactiveFormsModule
  ]
})
export class PortfolioModule { }
