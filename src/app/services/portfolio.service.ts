import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidades } from '../interface/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private url = 'https://backendbenitez.herokuapp.com/habilidad'
  //private url = 'http://localhost:8181/habilidad'
  constructor(private http: HttpClient) { }



  obtenerDatos(): Observable<any> {
    const ApiUrl = `${this.url}/habilidades`;
    return this.http.get<any>(ApiUrl)
  }

  editarHabilidad(habilidad: Habilidades): Observable<any> {
    const endpointEditarHabilidad = `${this.url}/habilidades/editar/${habilidad.id}`;
    return this.http.put(endpointEditarHabilidad, habilidad);
  }



  eliminarDato(habilidad: Habilidades): Observable<any> {
    const url = `${this.url}/habilidades/eliminar/${habilidad.id}`
    return this.http.delete<Habilidades>(url);
  }

}
