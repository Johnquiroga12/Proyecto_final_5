import { Registro } from 'src/app/services/class/registro';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-detalle-registros',
  templateUrl: './detalle-registros.component.html',
  styleUrls: ['./detalle-registros.component.css']
})
export class DetalleRegistrosComponent implements OnInit{

  constructor(
    private activatedRoute: ActivatedRoute,
    private registroService: RegistroService
  ) { }

  registro: Registro = new Registro();

  ngOnInit(): void {

    this.detallesRegistro();
    
  }

  detallesRegistro() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];

      if(id) {
        this.registroService
        .getRegistro(id)
        .subscribe((registro) => (this.registro = registro));
      }
    })
  }

}
