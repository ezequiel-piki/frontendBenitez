import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/interface/portfolio.interface';
import { PortfolioService } from 'src/app/services/portfolio.service';



@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html'
  
})
export class ExperienciaEducacionComponent implements OnInit {
   
  
  usuario: Habilidades[]=[];
  
  
   constructor(private miExperiencia : PortfolioService) { }
   
   

   ngOnInit(): void {
    this.miExperiencia
    .obtenerDatos()
    .subscribe(data=>{
      this.usuario=data;
      console.log('usuario con todos sus datos',this.usuario)
    });
  }

   delete(habilidad:Habilidades){
  this.miExperiencia.eliminarDato(habilidad).subscribe(()=>{
    
    this.usuario=this.usuario.filter(h=>h.id !== habilidad.id)
    
  })
  
  } 

  
}
