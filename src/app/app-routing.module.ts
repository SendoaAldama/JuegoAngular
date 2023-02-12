import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './vista/login/login.component';
import { RegistroComponent } from './vista/login/registro/registro.component';
import { TableroComponent } from './vista/login/tablero/tablero.component';
import { PaginaNoEncontradaComponent } from './vista/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'tablero', component: TableroComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component:  PaginaNoEncontradaComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
