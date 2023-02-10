import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Persona } from './class/Persona';

@Injectable({
  providedIn: 'root'
})

export class RegpersoService {
  private mostrardatos: string = 'http://localhost:8080/apiox/per/listar';
  private guardardatos: string = 'http://localhost:8080/apiox/per/crear';
  private editardatos: string =  'http://localhost:8080/apiox/per/update';
  private eliminardatos: string = 'http://localhost:8080/apiox/per/delete';
  
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }



  getmostrardatosperso(): Observable<Persona[]> {
    //   return of (CLIENTES);
    return this.http.get<Persona[]>(this.mostrardatos).pipe(
      map(resoponse => resoponse as Persona[])
    )
  }

  create(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.guardardatos, persona, { headers: this.httpHeaders })

  }
editarp(id: any, perso: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.editardatos}/${id}`, perso);
  }

  eliminar(id: any): Observable<Persona> {
    return this.http.delete<Persona>(`${this.eliminardatos}/${id}`);
  }

}