import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registro } from './class/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  URL: string = 'http://localhost:8080/api/registro/';
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http:HttpClient) { }

  getRegistros(): Observable<Registro[]>{
    return this.http.get<Registro[]>(`${this.URL}list`);
  }
  Registro() : Observable<Registro[]>{
    return this.http.get<Registro[]>(`${this.URL}listar`);
  } 

  getRegistro(id_registro): Observable<Registro>{
    return this.http.get<Registro>(`${this.URL}search/${id_registro}`)
  }

  saveRegistro(registro : Registro) : Observable<Registro> {
    return this.http.post<Registro>(`${this.URL}create`, registro, {headers:this.httpHeaders});
  }
  
  desativar2( vehiculo:Registro,id:any){
    return this.http.put<Registro>(this.URL+`update/${id}`,vehiculo);
  
  }
}
