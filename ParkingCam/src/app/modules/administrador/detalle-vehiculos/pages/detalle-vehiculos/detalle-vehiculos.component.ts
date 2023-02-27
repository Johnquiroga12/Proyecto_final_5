import { VehiculoService } from 'src/app/services/vehiculo.service';
import { Vehiculo } from 'src/app/services/class/vehiculo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-vehiculos',
  templateUrl: './detalle-vehiculos.component.html',
  styleUrls: ['./detalle-vehiculos.component.css'],
})
export class DetalleVehiculosComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private vehiculoService: VehiculoService
  ) {}

  vehiculo: Vehiculo = new Vehiculo();

  ngOnInit(): void {
    this.detalleVehiculo();
  }

  detalleVehiculo() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.vehiculoService
          .getVehiculo(id)
          .subscribe((vehiculo) => (this.vehiculo = vehiculo));
      }
    });
  }
}
