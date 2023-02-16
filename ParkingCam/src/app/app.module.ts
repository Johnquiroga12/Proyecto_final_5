import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegUsuarioComponent } from './regUsuario/regUsuario.component';
import { Login_pComponent } from './login_p/login_p.component';
import { InicioComponent } from './inicio/inicio.component';
import { HederComponent } from './header/heder.component';
import { Pag_prin_bienvenidaComponent } from './pag_prin_bienvenida/pag_prin_bienvenida.component';
import { Mod_PersonasComponent } from './Mod_Personas/Mod_Personas.component';
import { SearchPipe } from './Services/class/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    Login_pComponent,
    RegUsuarioComponent,
    InicioComponent,
    HederComponent,
    Pag_prin_bienvenidaComponent,
    Mod_PersonasComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
