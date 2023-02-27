import { Vehiculos } from './class/vehiculo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  URL: string = 'http://localhost:8080/api/vehiculo/'

  constructor(private http:HttpClient) { }

  getVehiculo() : Observable<Vehiculos[]>{
    return this.http.get<Vehiculos[]>(`${this.URL}list`);
  }  
}
