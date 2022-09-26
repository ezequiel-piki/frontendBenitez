import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidades } from '../interface/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private url ='https://backendbenitez.herokuapp.com/habilidad'

  constructor(private http:HttpClient) { }
  
  

  obtenerDatos():Observable<any>{
  const ApiUrl = `${this.url}/list`;  
  return this.http.get<any>(ApiUrl)
  }

  eliminarDato(habilidad:Habilidades):Observable<any>{
    const url = `${this.url}/delete/${habilidad.id}`
    return this.http.delete<Habilidades>(url);
  }
  
}
