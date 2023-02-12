import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './vista/login/login.component';
import { RegistroComponent } from './vista/login/registro/registro.component';
import { TableroComponent } from './vista/login/tablero/tablero.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './vista/pagina-no-encontrada/pagina-no-encontrada.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    TableroComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
