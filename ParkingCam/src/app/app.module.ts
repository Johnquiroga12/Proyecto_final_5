import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mod_PersonasComponent } from './Mod_Personas/Mod_Personas.component';
import { SearchPipe } from './Services/class/search.pipe';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
