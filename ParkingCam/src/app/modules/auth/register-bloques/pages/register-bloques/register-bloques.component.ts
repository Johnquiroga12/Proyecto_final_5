import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Bloque } from 'src/app/services/class/bloque';
import { BloqueService } from 'src/app/services/bloque.service';

@Component({
  selector: 'app-register-bloques',
  templateUrl: './register-bloques.component.html',
  styleUrls: ['./register-bloques.component.css']
})
export class RegisterBloquesComponent implements OnInit{

  bloque: Bloque = new Bloque;

  constructor(private router: Router, private bloqueService: BloqueService) {}

  ngOnInit(): void {
    
  }

  createBloque(){
    return this.bloqueService.saveBloque(this.bloque).subscribe(
      res => {
        this.router.navigate(['/home/dashboard'])
        console.log(res)
      },

      err => console.error(err)
    )
  }

}
