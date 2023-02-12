import { UserService } from './../../../compartir/servicios/user.service';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/compartir/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public usuario: Usuario;

  constructor(private router: Router, private userService: UserService)
  {

    this.usuario = new Usuario();

  }

  public registro(): void {

      this.userService.register(this.usuario)
      .then(() =>
      {

          this.router.navigate(['/login']);
          alert("Usuario registrado");

      })
      .catch((err) =>
      {

          console.log("Error al registrarse", err);
          alert("El correo ya esta registrado");

          this.usuario.correo = "";
          this.usuario.contra = "";

      });

  }

}
