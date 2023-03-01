import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './class/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL: string = 'http://localhost:8080/api/usuario/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) { }

  getUsuarios() : Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.URL}list`);
  }

  getUsuario(id_usuario) : Observable<Usuario> {
    return this.http.get<Usuario>(`${this.URL}search/${id_usuario}`)
  }

  saveUsuario(usuario:Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>(`${this.URL}create`, usuario, {headers:this.httpHeaders});
  }

}
