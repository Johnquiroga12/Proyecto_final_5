import { Component, OnInit } from '@angular/core';
import { Vehiculos } from 'src/app/services/class/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css'],
})
export class ListaVehiculosComponent implements OnInit {
  vehiculos: Vehiculos[];

  constructor(private vehiculosService: VehiculoService) {}

  ngOnInit(): void {
    this.vehiculosService
      .getVehiculo()
      .subscribe((res) => (this.vehiculos = res));
  }
}
