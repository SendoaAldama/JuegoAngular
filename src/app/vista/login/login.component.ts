import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/compartir/clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario: Usuario;

  constructor(private router: Router)
  {

    this.usuario = new Usuario();

  }

  public sesion()
  {

    if(this.usuario.correo == localStorage.getItem("correo") && this.usuario.contra == localStorage.getItem("contra"))
    {

      this.router.navigate(['/tablero']);

    }

  }

}
