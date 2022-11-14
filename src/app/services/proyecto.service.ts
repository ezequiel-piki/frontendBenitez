import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  //private url = 'https://backendbenitez.herokuapp.com/proyectos'
  private url = 'http://localhost:8181/proyectos'

  constructor(private http: HttpClient) { }

  saveProyecto(proyecto: Proyecto) {
    const url = `${this.url}/crear`
    return this.http.post<any>(url, proyecto);
  }

  public getProyectos(): Observable<Proyecto[]> {
    const url = `${this.url}/lista`
    return this.http.get<Proyecto[]>(url);
  }

  public getProyectoById(id: number): Observable<Proyecto> {
    const url = `${this.url}/${id}`;
    return this.http.get<Proyecto>(url);
  }

  public updateProyecto(id: number, proyecto: Proyecto): Observable<any> {
    const url = `${this.url}/editar/${id}`
    return this.http.put<any>(url, proyecto);
  }

  delete(id: number): Observable<any> {
    const url = `${this.url}/eliminar/${id}`
    return this.http.delete<any>(url);
  }
}
