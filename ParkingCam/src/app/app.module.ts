import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegUsuarioComponent } from './regUsuario/regUsuario.component';
import { Login_pComponent } from './login_p/login_p.component'; 
@NgModule({
  declarations: [		
    AppComponent,
    Login_pComponent,   
    RegUsuarioComponent

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
