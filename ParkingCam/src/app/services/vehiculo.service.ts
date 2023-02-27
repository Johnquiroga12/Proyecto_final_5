import { Vehiculo } from './class/vehiculo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  URL: string = 'http://localhost:8080/api/vehiculo/';

  constructor(private http:HttpClient) { }

  getVehiculos() : Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.URL}list`);
  } 
  
  getVehiculo(id_vehiculo) : Observable<Vehiculo> {
    return this.http.get<Vehiculo>(`${this.URL}search/${id_vehiculo}`)
  } 
  
}
