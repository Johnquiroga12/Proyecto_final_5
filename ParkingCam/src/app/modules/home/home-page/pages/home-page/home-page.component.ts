import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/services/class/registro';
import { PersonaService } from 'src/app/services/persona.service';
import { RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', './home-page.component.scss']
})
export class HomePageComponent implements OnInit{


  registros: Registro[];
  buscarTabla = '';
  page: number;
  public datosEstadiscos: any;

  constructor(private registroService: RegistroService, private personaService: PersonaService ) { }

  ngOnInit(): void {
    setInterval(() => {
      this.listar();
      this.getDataOfEstadistic();
 
    }, 1000);

  }

  

  listar() {
    this.registroService.Registro().subscribe(
      res => this.registros = res
    )
  }

  public getDataOfEstadistic() {
    this.personaService.obtenerResumen().subscribe((data) => {
      this.datosEstadiscos = data;
      console.log({data: this.datosEstadiscos})
    });
  }

  act: string = 'D';
  ve: any;
  idMascotaDelete: any;
  
  descativar2(id: any) {
    this.registroService.getRegistro(id).subscribe(data => {
      this.ve = data
      this.idMascotaDelete = this.ve.id_persona;
      console.log("ES LA ID -> " + this.ve.id_persona);
      this.ve.estado = this.act;
      this.registroService.desativar2(this.ve, id).subscribe(data => {
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
