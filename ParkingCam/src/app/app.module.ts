import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mod_PersonasComponent } from './Mod_Personas/Mod_Personas.component';
import { SearchPipe } from './Services/class/search.pipe';
import { NgModule } from '@angular/core';
//john

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    Mod_PersonasComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule  
  ],
  
  exports: [

    FormsModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
