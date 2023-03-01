import { Component, OnInit } from '@angular/core';
import { Bloque } from 'src/app/services/class/bloque';
import { BloqueService } from 'src/app/services/bloque.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-bloque',
  templateUrl: './editar-bloque.component.html',
  styleUrls: ['./editar-bloque.component.css']
})
export class EditarBloqueComponent implements OnInit{

  bloque: Bloque = new Bloque;
  dataname: boolean=false;

  constructor(private router: Router, private bloqueService: BloqueService,private acrouter: ActivatedRoute) {}

  ngOnInit(): void {
   this.cargar(); 
  }

  editarbloque(){
    return this.bloqueService.saveBloque(this.bloque).subscribe(
      res => {
        this.router.navigate(['/administrador/lista-bloques'])
        console.log(res)
      },

      err => console.error(err)
    )
  }

cargar(): void {
  this.acrouter.params.subscribe(params => {
    let id = params['id']
    if (id) {
      this.dataname = true;
      this.bloqueService.getbloque(id).subscribe((VEI) => this.bloque = VEI)
    }
  })
}


}


