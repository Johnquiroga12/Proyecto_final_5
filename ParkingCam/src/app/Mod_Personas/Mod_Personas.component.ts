import { Component, OnInit } from '@angular/core';
import { RegpersoService } from '../Services/regperso.service';
import { Persona } from '../Services/class/Persona';
import Swal from 'sweetalert2'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Mod_Personas',
  templateUrl: './Mod_Personas.component.html',
  styleUrls: ['./Mod_Personas.component.css']
})
export class Mod_PersonasComponent implements OnInit {
buscar='';
sumatotal=0;
  persona = new Persona();
  perso: Persona[] = [];

  constructor(private regperso: RegpersoService, private router: Router, private acrouter: ActivatedRoute) { }

  ngOnInit() {
    this.SumatoriaPor(this.perso);
    this.Lista();
  }

  Lista(): void {
    this.regperso.getmostrardatosperso().subscribe(
      Persona => this.perso = Persona
    );
  }
  guar() {
    if (this.persona.id_persona) {
      //     this.edit();
      this.regperso.editarp(this.persona.id_persona, this.persona)
        .subscribe(() => this.Lista());
      Swal.fire('El ususario se a modificado', ` usuario ${this.persona.nombre} guardado con exito`, 'success');
      this.lim(this.persona);
    } else {
      this.regperso.create(this.persona).subscribe(
        () => this.Lista(),


      )
      Swal.fire('El ususario se a guardado', ` usuario ${this.persona.nombre} guardado con exito`, 'success');
      this.lim(this.persona);
    }
  }

  eliminar(eliminate: Persona): void {
    Swal.fire({
      icon: 'warning',
      title: '¿Estás seguro/a de eliminar a esta Persona?',
      showConfirmButton: true,
      confirmButtonText: 'ELIMINAR',
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
      cancelButtonText: 'CANCELAR',
      cancelButtonColor: '#d33',
      buttonsStyling: true,

    }).then((result) => {
      if (result.isConfirmed) {
        this.regperso.eliminar(eliminate.id_persona).subscribe(
          res => this.regperso.getmostrardatosperso().subscribe(
            response => this.perso = response,

          )
        )
        Swal.fire("Correcto!", "Se elimino satifactoriamente!", "success");
      } else {

        Swal.fire("Se cancelo la eliminacion");

      }
    })
  }
  lim(carga: Persona) {
    carga.id_persona = 0;
    carga.nombre = "";
    carga.apellido = "";
    carga.cedula = "";
    carga.correo = "";
    carga.tipo = "";
  }
  cargar(carga: Persona): void {
    this.persona.id_persona = carga.id_persona;
    this.persona.nombre = carga.nombre;
    this.persona.apellido = carga.apellido;
    this.persona.cedula = carga.cedula;
    this.persona.correo = carga.correo;
    this.persona.tipo = carga.tipo;
  }

  SumatoriaPor(perso:any): number{
  this.sumatotal=0;
    for (let i = 0; i < perso; i++) {
  this.sumatotal =  perso[i];
    }
    return this.sumatotal;
  }

}