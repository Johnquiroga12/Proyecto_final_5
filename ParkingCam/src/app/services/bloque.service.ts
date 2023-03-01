import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bloque } from './class/bloque';

@Injectable({
  providedIn: 'root'
})
export class BloqueService {

  URL: string = 'http://localhost:8080/api/bloque/'
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) { }

  getBloques(): Observable<Bloque[]> {
    return this.http.get<Bloque[]>(`${this.URL}list`);
  }
  getbloque(id_bloque) : Observable<Bloque> {
    return this.http.get<Bloque>(`${this.URL}search/${id_bloque}`)
  }

  saveBloque(bloque: Bloque) : Observable<Bloque> { 
    return this.http.post<Bloque>(`${this.URL}create`, bloque, {headers: this.httpHeaders});
  }
}
