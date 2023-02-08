import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Registro } from './class/Registro';
@Injectable( 
    {
        providedIn: 'root'
    }
     )
export class RegusuService {
    private guardardatos: string = 'http://localhost:8080/api/do/crear';
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })


constructor(private http: HttpClient) { }


create(registro: Registro): Observable<Registro> {
    return this.http.post<Registro>(this.guardardatos, registro, { headers: this.httpHeaders})
  }
}
