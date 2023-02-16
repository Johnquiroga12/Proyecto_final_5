import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registro } from './class/Usuarios';
@Injectable( 
    {
        providedIn: 'root'
    }
     )
export class RegusuService {
    private guardardatos: string = 'http://localhost:8080/apiss/usu/crear';
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })


constructor(private http: HttpClient) { }


create(registro: Registro): Observable<Registro> {
    return this.http.post<Registro>(this.guardardatos, registro, { headers: this.httpHeaders})
  }
}
