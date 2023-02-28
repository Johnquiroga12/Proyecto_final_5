import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/services/class/registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.css']
})
export class ListaRegistrosComponent implements OnInit {

  registros : Registro[];

  constructor(private registroService : RegistroService){ }

  ngOnInit(): void {
    
    this.registroService.getRegistros().subscribe(
      res => this.registros = res
    )
  }

}
