import { Registro } from 'src/app/services/class/registro';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-register-registro',
  templateUrl: './register-registro.component.html',
  styleUrls: ['./register-registro.component.css']
})
export class RegisterRegistroComponent implements OnInit {

  registro: Registro = new Registro;

  constructor(private router: Router, private registroService: RegistroService) { }

  ngOnInit(): void {
    
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
