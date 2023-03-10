import { Persona } from './class/persona';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://138.197.127.252:8080/api';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL: string = 'http://138.197.127.252:8080/api/persona/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }

  getPersonas() : Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.URL}list`);

  }
  Persona() : Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.URL}listar`);
  } 
  getPersona(id_persona) : Observable<Persona> {
    return this.http.get<Persona>(`${this.URL}search/${id_persona}`)
  }

  savePersona(persona:Persona) : Observable<Persona> {
    return this.http.post<Persona>(`${this.URL}create`, persona, {headers:this.httpHeaders});
  }

  deletePersona(id): Observable<Persona>{
    return this.http.delete<Persona>(`${this.URL}delete/${id}`);
  }

  desativar2( vehiculo:Persona,id:any){
    return this.http.put<Persona>(this.URL+`update/${id}`,vehiculo);
  }

//Metodo para la busqueda de la contraseña
  public searchCedulaChangePassword(cedula: any){
    return this.http.get<any>(API_URL+'/persona/search/cedula/update/'+cedula);
  }

  public obtenerResumen(){
    return this.http.get<any>(API_URL+'/persona/resumen/data');
  }
  
}
