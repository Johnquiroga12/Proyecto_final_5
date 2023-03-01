import { Usuario } from './../../../../../services/class/usuario';
import { Vehiculo } from './../../../../../services/class/vehiculo';
import { Bloque } from './../../../../../services/class/bloque';
import { Registro } from 'src/app/services/class/registro';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';
import { BloqueService } from 'src/app/services/bloque.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register-registro',
  templateUrl: './register-registro.component.html',
  styleUrls: ['./register-registro.component.css']
})
export class RegisterRegistroComponent implements OnInit {

  registro: Registro = new Registro;
  listaRegistro: Registro[];
  listaBloques: Bloque[];
  listaVehiculos: Vehiculo[];
  listaUsuarios: Usuario[];

  constructor(private router: Router, private registroService: RegistroService,
    private bloqueService: BloqueService, private vehiculoService: VehiculoService,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    
    this.registroService.getRegistros().subscribe(
      listaR => this.listaRegistro = listaR
    );

    this.bloqueService.getBloques().subscribe(
      listaB => this.listaBloques = listaB
    );

    this.vehiculoService.getVehiculos().subscribe(
      listaV => this.listaVehiculos = listaV
    );

    this.usuarioService.getUsuarios().subscribe(
      listaR => this.listaUsuarios = listaR
    );
  }

  createRegistro(){
    return this.registroService.saveRegistro(this.registro).subscribe(
      res => {
        this.router.navigate(['/home/dashboard'])
        console.log(res)
      },

      err => console.error(err)
    )
  }

}
