import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Services/class/Persona';
import { RegpersoService } from 'src/app/Services/regperso.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  perso: Persona[] = [];



  constructor(private regperso: RegpersoService) { }

  ngOnInit() {
    this.Lista();


  }


  Lista(): void {
    this.regperso.getmostrardatosperso().subscribe(
      Persona => this.perso = Persona
    );
  }


}
