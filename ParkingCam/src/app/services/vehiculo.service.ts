import { Vehiculo } from './class/vehiculo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  URL: string = 'http://138.197.127.252:8080/api/vehiculo/';
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http:HttpClient) { }

  getVehiculos() : Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.URL}list`);
  } 
  
  //Metodo no vale
  Vehiculos() : Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.URL}listar`);
  } 
  
  getVehiculo(id_vehiculo) : Observable<Vehiculo> {
    return this.http.get<Vehiculo>(`${this.URL}search/${id_vehiculo}`)
  } 

  saveVehiculo(vehiculo:Vehiculo) : Observable<Vehiculo>{
    return this.http.post<Vehiculo>(`${this.URL}create`, vehiculo, {headers:this.httpHeaders});
  }
  delete(id): Observable<Vehiculo>{
    return this.http.delete<Vehiculo>(`${this.URL}delete/${id}`);
  }
 
  desativar2( vehiculo:Vehiculo,id:any){
    return this.http.put<Vehiculo>(this.URL+`update/${id}`,vehiculo);
  
  }
}
