import { Router, ActivatedRoute } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/services/class/persona';
import { Usuario } from 'src/app/services/class/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit {
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

    if (!/^[a-zA-Z0-9]+$/.test(value) || value.length < 5) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }

  }
 usuario = new Usuario();
  listaPersonas: Persona[];
  listaUsuarios: Usuario[];
  dataname: boolean=false;

  constructor(private router: Router, private usuarioService: UsuarioService,
    private personaService: PersonaService,private acrouter: ActivatedRoute) { }
  ngOnInit(): void {
  this.cargar();
  }

  
  editarUsuario() {
    if (this.usuario.username === ''|| this.usuario.password===''
    || this.usuario.rol==null ||  this.usuario.persona==null
    
    ) {
      console.log("Error");

      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Complete todos los registros',
        showConfirmButton: false,
        timer: 1500
      })

      return null;

    } else {
      return this.usuarioService.saveUsuario(this.usuario).subscribe(
        res => {
          this.router.navigate(['/administrador/lista-usuarios'])
          console.log(res)

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se a creado correctamente',
            showConfirmButton: false,
            timer: 1500
          })


        },

        err => console.error(err)
      )
    }
  }

  //Metodos de la foto

  async loadAnimalPicture(event: any) {
    const file = event.target.files[0];
    const fileSize = file.size; // tamaño en bytes
    if (fileSize > 1048576) {
      // mensaje de error al usuario
      // this.showError('El tamaño máximo de la foto debe ser de 1 MB.');
      event.target.value = null;
    } else {

      try {
        this.usuario.foto = await this.convertToBase64(file);
      } catch (error) {
        console.error(error);
      }
    }

  }

  //carga foto
  async convertToBase64(file: File): Promise<string> {
    const reader = new FileReader();
    return new Promise<string>((resolve, reject) => {
      reader.onload = () => {
        const result = btoa(reader.result as string);
        resolve(result);
      };
      reader.onerror = () => {
        reject(reader.error);
      };
      reader.readAsBinaryString(file);
    });
  }

  cargar(): void {
    this.acrouter.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.dataname = true;
        this.usuarioService.getUsuario(id).subscribe((per) => this.usuario = per)
      }
    })
  }


}
