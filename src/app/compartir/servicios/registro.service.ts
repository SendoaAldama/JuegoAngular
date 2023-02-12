import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor() { }

  public registro(usuario: Usuario): Observable<number>{

    return of(Math.random() * (1000-0));

  }

}
