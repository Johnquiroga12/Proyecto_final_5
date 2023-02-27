import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/services/class/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css'],
})
export class ListaVehiculosComponent implements OnInit {
  
  vehiculos: Vehiculo[];

  constructor(private vehiculosService: VehiculoService) {}

  ngOnInit(): void {
    this.vehiculosService
      .getVehiculos()
      .subscribe((res) => (this.vehiculos = res));
  }
}
