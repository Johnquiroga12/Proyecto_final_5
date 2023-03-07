import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './class/usuario';

const API_URL = 'http://localhost:8080/api';
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

 
  usuarios() : Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.URL}listar`);
  }

  getUsuario(id_usuario) : Observable<Usuario> {
    return this.http.get<Usuario>(`${this.URL}search/${id_usuario}`)
  }

  saveUsuario(usuario:Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>(`${this.URL}create`, usuario, {headers:this.httpHeaders});
  }

  desativar2( vehiculo:Usuario,id:any){
    return this.http.put<Usuario>(this.URL+`update/${id}`,vehiculo);
  
  }

  //Metodos para obtener y actualizar..
  public getAccountByDesactivation( cedula: any){
    return this.http.get<any>(API_URL+'/usuario/search/update/'+cedula);
  }

  public updateAccountByDesactivation(id_cuenta: any, user: any){
    return this.http.put<Usuario>(API_URL+'/usuario/user/update/'+id_cuenta, user);
  }

}
