import { Persona } from 'src/app/services/class/persona';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehiculo } from 'src/app/services/class/vehiculo';
import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit{

  vehiculo: Vehiculo = new Vehiculo;
  listaPersonas : Persona[];
  listaVehiculo : Vehiculo[];
  dataname: boolean=false;


  constructor(private router: Router, private vehiculoService: VehiculoService,
    private personaService: PersonaService,private acrouter: ActivatedRoute){}

  ngOnInit(): void {
    this.cargar();
    this.vehiculoService.getVehiculos().subscribe(
      listaV => this.listaVehiculo = listaV
    );

    this.personaService.getPersonas().subscribe(
      lista => this.listaPersonas = lista
    );
  }

  editarveiculo(){
    return this.vehiculoService.saveVehiculo(this.vehiculo).subscribe(
      res => {
        this.router.navigate(['/administrador/lista-vehiculos'])
      console.log(res)
      },

      err => console.error(err)
    )
  }
  cargar(): void {
    this.acrouter.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.dataname = true;
        this.vehiculoService.getVehiculo(id).subscribe((VEI) => this.vehiculo = VEI)
      }
    })
  }
}

