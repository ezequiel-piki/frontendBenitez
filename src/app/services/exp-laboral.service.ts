import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../interface/portfolio.interface';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExpLaboralService {

  private url = 'https://benitez-service-backend.onrender.com/habilidad'
  //private url = 'http://localhost:8181/habilidad'

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<Experiencia[]> {
    const ApiUrl = `${this.url}/habilidades`;
    return this.http.get<Experiencia[]>(ApiUrl);
  }

  updateExperiencia(id: number, experiencia: Experiencia): Observable<any> {
    const endpointEditarHabilidad = `${this.url}/habilidades/editar/${id}`;
    return this.http.put<any>(endpointEditarHabilidad, experiencia);
  }

  obtenerExperienciaById(id: number): Observable<Experiencia> {

    const url = `${this.url}/habilidades/${id}`;
    return this.http.get<Experiencia>(url);

  }

  delete(id: number): Observable<any> {
    const url = `${this.url}/habilidades/eliminar/${id}`
    return this.http.delete<any>(url);
  }

  crearExperiencia(experiencia: Experiencia) {
    const url = `${this.url}/habilidades/crear`
    return this.http.post<any>(url, experiencia);
  }

}
