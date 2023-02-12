import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/compartir/clases/usuario';
import { UserService } from 'src/app/compartir/servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario: Usuario;

  constructor(private router: Router, private userService: UserService)
  {

    this.usuario = new Usuario();

  }

  public sesion()
  {

    this.userService.inicio(this.usuario)
    .then(() =>
    {

        alert("Bienvenido al tablero");
        this.router.navigate(['/tablero']);

    })
    .catch((err) =>
    {

        alert("El correo o la contraseña son erroneas");
        console.log("Error al iniciar sesion", err);

        this.usuario.correo = "";
        this.usuario.contra = "";

    });

  }

}
