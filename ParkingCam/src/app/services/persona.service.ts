import { Persona } from './class/persona';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL: string = 'http://localhost:8080/api/persona/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }

  getPersonas() : Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.URL}list`);

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
}
