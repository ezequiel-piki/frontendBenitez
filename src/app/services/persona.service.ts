import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url = 'https://backendbenitez.herokuapp.com/persona'
  //private url = 'http://localhost:8181/persona'

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<Persona[]> {
    const url = `${this.url}/traer`
    return this.httpClient.get<Persona[]>(url);
  }

  public getPersonaById(id: number): Observable<Persona> {
    const url = `${this.url}/${id}`;
    return this.httpClient.get<Persona>(url);
  }



  public updatePersona(id: number, persona: Persona): Observable<any> {
    const url = `${this.url}/editar/${id}`
    return this.httpClient.put<any>(url, persona);
  }


}
