import { Persona } from './class/persona';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL: string = 'http://localhost:8080/api/persona/';

  constructor(private http:HttpClient) { }

  getPersonas() : Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.URL}list`);
  }

  
}
