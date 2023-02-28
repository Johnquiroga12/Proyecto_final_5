import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BloqueService } from 'src/app/services/bloque.service';
import { Bloque } from 'src/app/services/class/bloque';

@Component({
  selector: 'app-lista-bloques',
  templateUrl: './lista-bloques.component.html',
  styleUrls: ['./lista-bloques.component.css']
})
export class ListaBloquesComponent implements OnInit {

  bloques: Bloque[];

  constructor(private bloquesService: BloqueService) { }

  bloque: Bloque = new Bloque();

  ngOnInit(): void {
    
    this.bloquesService.getBloques().subscribe(
      res => this.bloques = res
    )
  }

}
