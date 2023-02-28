import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/services/class/vehiculo';
import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-register-vehiculo',
  templateUrl: './register-vehiculo.component.html',
  styleUrls: ['./register-vehiculo.component.css']
})
export class RegisterVehiculoComponent implements OnInit{

  vehiculo: Vehiculo = new Vehiculo;

  constructor(private router: Router, private vehiculoService: VehiculoService){}

  ngOnInit(): void {
    
  }

  createVehiculo(){
    return this.vehiculoService.saveVehiculo(this.vehiculo).subscribe(
      res => {
        this.router.navigate(['/home/dashboard'])
      console.log(res)
      },

      err => console.error(err)
    )
  }
}
