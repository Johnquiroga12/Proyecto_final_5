import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/services/class/persona';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  

  onKeyDown(event: KeyboardEvent) {
    this.onInputChange(event);
  }
  onInputChange(event: any) {
    const value = event.target.value;
    const input = event.target;
  
    if (!/^\d+$/.test(value) || value.length < 10) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  }
  InputChange(event: any) {
    const value = event.target.value;
    const input = event.target;
  
    if (!/^\d+$/.test(value) || value.length < 6) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }
  }



  sumatotal=0;
  persona = new Persona();
  perso: Persona[] = [];
  getclientes: Persona[] = [];
dataname: boolean=false;

  

  tableIndex = 0;

  constructor(private regperso: PersonaService,   private router: Router, private acrouter: ActivatedRoute) { }

  ngOnInit() {
    this.cargar();
    
  }

  createPersona(){
    
  if(this.persona.cedula === '' || this.persona.nombre === '' || this.persona.apellido === '' ||
  this.persona.correo === '' || this.persona.celular === '' || this.persona.n_emergencia === ''
  ||  this.persona.carrera==null || this.persona.cargo==null || this.persona.jornada==null
  ){

  console.log("Error");

  Swal.fire({
    position: 'top-end',
    icon: 'warning',
    title: 'Complete todos los registros',
    showConfirmButton: false,
    timer: 1500
  })

  return null;
    
  }else{

    return this.regperso.savePersona(this.persona).subscribe(
      res => {
        this.router.navigate(['/administrador/lista-personas']) 
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'La edicion se a completado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      
        console.log(res)
    },

    err => console.error(err)
    
    )
  }
  }

  cargar(): void {
    this.acrouter.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.dataname = true;
        this.regperso.getPersona(id).subscribe((per) => this.persona = per)
      }
    })
  }
}
