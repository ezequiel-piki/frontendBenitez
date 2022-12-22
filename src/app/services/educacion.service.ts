import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../model/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private url = 'backendbenitez-production.up.railway.app/educacion'
  //private url = 'http://localhost:8181/educacion'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]> {
    const url = `${this.url}/lista`;
    return this.httpClient.get<Educacion[]>(url);
  }

  public getEducacionById(id: number): Observable<Educacion> {
    const url = `${this.url}/${id}`;
    return this.httpClient.get<Educacion>(url);
  }

  public saveEducacion(educacion: Educacion): Observable<any> {
    const url = `${this.url}/crear`;
    return this.httpClient.post<any>(url, educacion);
  }

  public updateEducacion(id: number, educacion: Educacion): Observable<any> {
    const url = `${this.url}/editar/${id}`
    return this.httpClient.put<any>(url, educacion);
  }

  public deleteEducacionById(id: number): Observable<any> {
    const url = `${this.url}/eliminar/${id}`;
    return this.httpClient.delete(url);
  }
}
