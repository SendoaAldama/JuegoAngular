import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit{

    ngOnInit(): void {

      //Funciones
      function dibujar()
      {

        var canvas = document.getElementById('dado1') as HTMLCanvasElement;
        if (canvas.getContext){
            var ctx = canvas.getContext("2d");
            var X = canvas.width*0.5;
            var Y = canvas.height*0.5;
            var r = canvas.height*0.125;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
        }
        var canvas = document.getElementById('dado2') as HTMLCanvasElement;
        if (canvas.getContext){
            var ctx = canvas.getContext("2d");
            var X = canvas.width*0.25;
            var Y = canvas.height/2;
            var r = canvas.height*0.125;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.75;
            var Y = canvas.height/2;
            var r = canvas.height/8;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
        }
        var canvas = document.getElementById('dado3') as HTMLCanvasElement;
        if (canvas.getContext){
            var ctx = canvas.getContext("2d");
            var X = canvas.width*0.25;
            var Y = canvas.height*0.25;
            var r = canvas.height*0.125;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.5;
            var Y = canvas.height/2;
            var r = canvas.height/8;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.75;
            var Y = canvas.height*0.75;
            var r = canvas.height/8;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
        }
        var canvas = document.getElementById('dado4') as HTMLCanvasElement;
        if (canvas.getContext){
            var ctx = canvas.getContext("2d");
            var X = canvas.width*0.25;
            var Y = canvas.height*0.25;
            var r = canvas.height*0.125;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.75;
            var Y = canvas.height*0.25;
            var r = canvas.height/8;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.25;
            var Y = canvas.height*0.75;
            var r = canvas.height/8;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.75;
            var Y = canvas.height*0.75;
            var r = canvas.height/8;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
        }
        var canvas = document.getElementById('dado5') as HTMLCanvasElement;
        if (canvas.getContext){
            var ctx = canvas.getContext("2d");
            var X = canvas.width*0.25;
            var Y = canvas.height*0.25;
            var r = canvas.height*0.125;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.75;
            var Y = canvas.height*0.25;
            var r = canvas.height/8;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.25;
            var Y = canvas.height*0.75;
            var r = canvas.height/8;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.75;
            var Y = canvas.height*0.75;
            var r = canvas.height/8;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.5;
            var Y = canvas.height*0.5;
            var r = canvas.height*0.125;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
        }
        var canvas = document.getElementById('dado6') as HTMLCanvasElement;
        if (canvas.getContext){
            var ctx = canvas.getContext("2d");
            var X = canvas.width*0.25;
            var Y = canvas.height*0.25;
            var r = canvas.height*0.125;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.75;
            var Y = canvas.height*0.25;
            var r = canvas.height/8;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.25;
            var Y = canvas.height*0.75;
            var r = canvas.height/8;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.75;
            var Y = canvas.height*0.75;
            var r = canvas.height/8;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.5;
            var Y = canvas.height*0.25;
            var r = canvas.height*0.125;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
            var X = canvas.width*0.5;
            var Y = canvas.height*0.75;
            var r = canvas.height*0.125;
            ctx?.beginPath();
            ctx?.arc(X, Y, r, 0, 2 * Math.PI);
            if (ctx) {
              ctx.fillStyle = "black";
            }
            ctx?.fill();
        }
      }

      function numeroDado() //Aqui se realizaria la animacion del movimiento... Y se manda el numero que haya salido en el dado
      {

          //Variables
          let numero = Math.floor(Math.random() * 6)+1;
          let posicion = "cubo"+numero;

          //Codigo
          let cubo = document.querySelector(".cubo3D");

          if(cubo)
          {

            cubo.id = posicion;

          }

          return numero; //Sacamos un numero del 1 al 6

      }

      function pintar(movimientos: number, tablero: HTMLElement)   //Pintar el tablero por su posicion y el numero de movimientos
      {

          //Variables
          let esta;   //Se almacena la posicion actual del personaje
          let posicionA;  //Separacion de puntos

          let fila;   //Fila actual
          let columna;    //Columna actual

          let haySitio = false;   //Para saber si hay algun sitio donde desplazarse

          //Codigo
          for(let i = 0; i < tablero.childElementCount; i++)  //Lo buscamos
          {

              for(let j = 0; j < (tablero.children[i] as HTMLElement).childElementCount; j++)    //Recorremos el tablero
              {

                  if((tablero.childNodes[i].childNodes[j] as HTMLElement).childElementCount != 0)  //Si tiene hijos, en este caso el unico hijo que puede tener es el personaje
                  {

                      esta = (tablero.childNodes[i].childNodes[j] as HTMLElement).getAttribute("punto");   //Almacenamos la posicion

                  }

              }

          }

          posicionA = esta?.split(".");    //Separacion

          if(posicionA)
          {

            fila = parseInt (posicionA[0]);    //Fila actual
            columna = parseInt (posicionA[1]);    //Columna actual

            //Posibilidades de movimiento
            if(fila + movimientos && tablero.childNodes[fila + movimientos])
            {

                (tablero.childNodes[fila + movimientos].childNodes[columna] as HTMLElement).classList.add("marca");

                if((tablero.childNodes[fila + movimientos].childNodes[columna] as HTMLElement).id == "fin")
                {

                    (tablero.childNodes[fila + movimientos].childNodes[columna] as HTMLElement).style.backgroundColor = "red";

                }

            }
            if(fila - movimientos && fila - movimientos == 0 || tablero.childNodes[fila - movimientos])
            {

                (tablero.childNodes[fila - movimientos].childNodes[columna] as HTMLElement).classList.add("marca");

                if((tablero.childNodes[fila - movimientos].childNodes[columna] as HTMLElement).id == "inicio")
                {

                    (tablero.childNodes[fila - movimientos].childNodes[columna] as HTMLElement).style.backgroundColor = "red";

                }

            }
            if(columna + movimientos && tablero.childNodes[fila].childNodes[columna + movimientos])
            {

                (tablero.childNodes[fila].childNodes[columna + movimientos] as HTMLElement).classList.add("marca");

                if((tablero.childNodes[fila].childNodes[columna + movimientos] as HTMLElement).id == "fin")
                {

                    (tablero.childNodes[fila].childNodes[columna + movimientos] as HTMLElement).style.backgroundColor = "red";

                }

            }
            if(columna - movimientos && columna - movimientos == 0 || tablero.childNodes[fila].childNodes[columna - movimientos])
            {

                (tablero.childNodes[fila].childNodes[columna - movimientos] as HTMLElement).classList.add("marca");

                if((tablero.childNodes[fila].childNodes[columna - movimientos] as HTMLElement).id == "inicio")
                {

                    (tablero.childNodes[fila].childNodes[columna - movimientos] as HTMLElement).style.backgroundColor = "red";

                }

            }

          }

          for(let i = 0; i < tablero.childElementCount; i++)  //Lo buscamos
          {

              for(let j = 0; j < (tablero.childNodes[i] as HTMLElement).childElementCount; j++)    //Recorremos el tablero
              {

                  if((tablero.childNodes[i].childNodes[j] as HTMLElement).classList.contains("marca") || (tablero.childNodes[i].childNodes[j] as HTMLElement).style.backgroundColor == "red")
                  {

                      haySitio = true;    //Si hay

                  }

              }

          }

          if(haySitio == true)    //Si tiene casillas azules
          {

              return true;    //Puede moverse

          }
          else
          {

              setTimeout(() =>
              {

                  alert("No hay ninguna casilla a la que puedes desplazarte, tira de nuevo los dados");   //Le sacamos esto si no puede moverse

              }, 600);    //Despues de 6 milisegundos

              return false;   //No moverse porque no tiene casillas

          }

      }

      function posibilidades(casillaClick: HTMLElement)    //Comprobar si puede ir a ese cuadrado
      {

          if(casillaClick.classList.contains("marca") || casillaClick.style.backgroundColor == "red")    //Si lo tiene puede hacer la accion
          {

              return true;    //Puede

          }
          else    //Sino
          {

              return false;   //No puede

          }

      }

      function limpiar(tablero: HTMLElement)   //Limpiamos el tablero quitando la clase marca y el background-color
      {

          for(let i = 0; i < tablero.childElementCount; i++)  //Lo buscamos
          {

              for(let j = 0; j < (tablero.childNodes[i] as HTMLElement).childElementCount; j++)    //Recorremos el tablero
              {

                  (tablero.childNodes[i].childNodes[j] as HTMLElement).classList.remove("marca");   //Almacenamos la posicion
                  (tablero.childNodes[i].childNodes[j] as HTMLElement).style.removeProperty("background-color");   //Borrar el color de fondo

              }

          }

      }

      function movimiento(tablero: HTMLElement, recuadro: HTMLCollectionOf<HTMLTableCellElement>, numero: number, img: HTMLImageElement, contadorMovimientos: number, contadorTiradas: number, tiempoI: String) //Movimiento del personaje entre los cuadrados
      {

          //Codigo
          for(let i = 0; i < tablero.childElementCount; i++)  //Buscamos la posicion de las marcas
          {

              for(let j = 0; j < (tablero.childNodes[i] as HTMLElement).childElementCount; j++)    //Recorremos el tablero
              {

                  (tablero.childNodes[i].childNodes[j] as HTMLElement).classList.remove("marca");   //Quitamos las marcas

              }

          }

          recuadro[numero].appendChild(img);  //Se mueve el personaje a ese sitio

          if(recuadro[numero] == document.getElementById("fin")) //Si llega al final del mapa
          {

              (tablero.lastChild?.lastChild as HTMLElement).style.removeProperty("background-color");   //Quitamos el color azul del fin

              setTimeout(function()
              {

                  alert("Enorabuena, Has echo "+contadorMovimientos+" movimientos y "+contadorTiradas+" tiradas 🙃");    //Si llega al final sale esto

                  let tiempo = new Date();   //Cogemos la fecha del mometo de ganar
                  let tiempoF = tiempo.toLocaleString(); //Lo tranformamos a string

                  // controlador.record(contadorTiradas, contadorMovimientos, tiempoI, tiempoF);  //Les mandamos para que se guarden los valores y se efectuen las comprobaciones necesarias

              },0);

              return true;    //Para que no pueda usar mas el dado

          }

          return false;   //Para que pueda usar el dado

      }

      //Variables
      let img = document.createElement("img");    //Imagen del personaje
      img.id = "moni";

      let divDado = document.getElementById("contenedor-dado");

      let tirado = false;

      let numeroMovimiento = 0;

      let contadorTiradas = 0;
      let contadorMovimientos = 0;

      let tiempo = new Date();   //Captura de la fecha del sistema
      let tiempoI = tiempo.toLocaleString(); //Cogemos el tiempo actual enformato string del comento de la captura de la fecha del sistema

      let tablero = document.getElementById("tablero");

      //Codigo
      for(let i = 0; i < 10; i++)
      {

          let tr = document.createElement("tr");

          for(let j = 0; j < 10; j++)
          {

              let td = document.createElement("td");
              td.setAttribute("punto", i+"."+j);

              tr.appendChild(td);
          }

          document.getElementById("tablero")?.appendChild(tr);

      }

      document.getElementsByTagName("tr")[0].getElementsByTagName("td")[0].id = "inicio";
      document.getElementsByTagName("tr")[0].getElementsByTagName("td")[0].appendChild(img);

      document.getElementsByTagName("tr")[9].getElementsByTagName("td")[9].id = "fin";

      dibujar();

      divDado?.addEventListener("click", () => //Efecto al pulsar el dado
      {

          if(tirado == false) //Si puede tirar porque no ha lanzado o esta en otro turno
          {

              numeroMovimiento = numeroDado();    //Sacar numero del dado

              document.querySelector(".cubo3D")?.classList.add("animacion1");   //Añadimos la animacion de girar

              setTimeout(() =>
              {

                  document.querySelector(".cubo3D")?.classList.remove("animacion1");    //La quitamos

                  if(!pintar(numeroMovimiento, tablero as HTMLElement))  //Para saber si tiene o no casillas
                  {

                      tirado = false;     //Para que pueda volver a tirar si no hay casillas

                  }

              }, 500);   //Despues de 0.5s

              tirado = true;  //Si esta true no puede lanzar hasta que se mueva o se compruebe si no pude moverse

              contadorTiradas++;  //Sumamos uno mas al contador

          }

      });

      //Meter el evento de click en todos los td en los tableros
      for(let i = 0; i < (tablero as HTMLElement).getElementsByTagName("td").length; i++) //Recorremos todos los td del tablero
      {

        (tablero as HTMLElement).getElementsByTagName("td")[i].addEventListener("click", (evento) => //Si pulsa uno de los cuadros del tablero
          {

              if(posibilidades((tablero as HTMLElement).getElementsByTagName("td")[i]))    //Comprobar si se puede mover el usuario, sino saltara un mensaje de alerta
              {

                  contadorMovimientos++;  //Sumamos un movimiento

                  //Movimiento a realizar
                  if(movimiento((tablero as HTMLElement), (tablero as HTMLElement).getElementsByTagName("td"), i, img, contadorMovimientos, contadorTiradas, tiempoI))   //Mandamos los valores para comprobar si gana o no
                  {

                      limpiar((tablero as HTMLElement));   //Limpiamos las marcas del tablero
                      tirado = true;      //Si esta true no puede volver a tirar el dado

                  }
                  else
                  {

                      limpiar((tablero as HTMLElement));   //Limpiamos las marcas del tablero
                      tirado = false;     //Si esta falso puede volver a tirar el dado

                  }

              }

          });

      }

  }

}
