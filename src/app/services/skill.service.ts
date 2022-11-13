import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private url = 'https://backendbenitez.herokuapp.com/skills'
  //private url = 'http://localhost:8181/skills'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]> {
    const url = `${this.url}/lista`;
    return this.httpClient.get<Skill[]>(url);
  }

  public getSkillById(id: number): Observable<Skill> {
    const url = `${this.url}/${id}`;
    return this.httpClient.get<Skill>(url);
  }

  public saveSkill(skill: Skill): Observable<any> {
    const url = `${this.url}/crear`;
    return this.httpClient.post<any>(url, skill);
  }

  public updateSkill(id: number, skill: Skill): Observable<any> {
    const url = `${this.url}/editar/${id}`
    return this.httpClient.put<any>(url, skill);
  }

  public delete(id: number): Observable<any> {
    const url = `${this.url}/eliminar/${id}`;
    return this.httpClient.delete(url);
  }
}
