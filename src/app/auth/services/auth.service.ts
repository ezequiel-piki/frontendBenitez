import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, of, map } from 'rxjs';

import { Auth } from '../class/auth';
import { LoginUsuario } from '../class/login-usuario';
import { JwtDto } from '../class/jwt-dto';
import { NuevoUsuario } from '../class/nuevo-usuario';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  //private baseUrl = "https://backendbenitez.herokuapp.com/auth";
  private baseUrl = "http://localhost:8181/auth";


  constructor(private http: HttpClient) { }

  verificaAutenticacion(): boolean {

    return (sessionStorage.getItem('AuthToken') !== null);
  }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/nuevo`, nuevoUsuario);
  }

  login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.http.post<JwtDto>(`${this.baseUrl}/login`, loginUsuario)
  }





}
