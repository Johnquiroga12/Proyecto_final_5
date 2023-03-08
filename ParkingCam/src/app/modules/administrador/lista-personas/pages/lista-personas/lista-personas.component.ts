import { PersonaService } from "src/app/services/persona.service";
import { Component, OnInit } from '@angular/core';
import { Persona } from "src/app/services/class/persona";
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})

export class ListaPersonasComponent implements OnInit {

  personas: Persona[] = [];
  persona = new Persona();
  buscarTabla ='';
  showPagination: boolean;
  page: number;
  previousPage: number;

  constructor(private personasService: PersonaService, private router: Router) { }

  ngOnInit(): void {


    this.listar();
  }

  listar() {
    this.personasService.Persona().subscribe(
      res => this.personas = res
    )

  }

  eliminar(persona) {
    this.personasService.deletePersona(persona).subscribe(
      res => {

        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
        this.listar();

      },
    )
  }
  cargar(carga: Persona): void {
    this.persona.id_persona = carga.id_persona;
    this.persona.nombre = carga.nombre;
    this.persona.apellido = carga.apellido;
    this.persona.cedula = carga.cedula;
    this.persona.correo = carga.correo;
  }


  editar(evento) {
    let id = evento.target.value;
    console.log(id)
    console.log(id)
    if (evento.target.value == '') {
      this.personasService.getPersonas();
    } else {
      this.personasService.getPersona(id).subscribe(
        error => (console.log(error))

      )
    }

  }


  act: string = 'D';
  ve: any;
  idMascotaDelete: any;
  descativar2(id: any) {
    this.personasService.getPersona(id).subscribe(data => {
      this.ve = data
      this.idMascotaDelete = this.ve.id_persona;
      console.log("ES LA ID -> " + this.ve.id_persona);
      this.ve.estado = this.act;
      this.personasService.desativar2(this.ve, id).subscribe(data => {
        console.log(data)
        Swal.fire(
          'Eliminado!',
          'se a elimino correctamente.',
          'success'
        )
        this.listar();

      })
    })

  }

  
}

