import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/compartir/clases/usuario';
import { RegistroService } from 'src/app/compartir/servicios/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public usuario: Usuario;

  constructor(private registroService: RegistroService, private router: Router)
  {

    this.usuario = new Usuario();

  }

  public registro(): void {

    this.registroService.registro(this.usuario).subscribe(
      (data: number) => {

        localStorage.setItem('correo', this.usuario.correo);
        localStorage.setItem('contra', this.usuario.contra);
        localStorage.setItem('miTokenPersonal',`${ data }`);

        this.router.navigate(['/login']);

      },
      (error: Error) => {
        console.error("Error al realizar el acceso");
      }
    )
  }

}
