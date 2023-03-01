import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit{

    ngOnInit(): void {

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

      //Variables
      let img = document.createElement("img");    //Imagen del personaje
      img.id = "moni";

      let divDado = document.getElementById("contenedor-dado");

      let tirado = false;

      let numeroMovimiento = 0;
      let contadorTiradas = 0;

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

      divDado?.addEventListener("click", (evento) => //Efecto al pulsar el dado
      {

          if(tirado == false) //Si puede tirar porque no ha lanzado o esta en otro turno
          {

              numeroMovimiento = numeroDado();    //Sacar numero del dado

              document.querySelector(".cubo3D")?.classList.add("animacion1");   //Añadimos la animacion de girar

              setTimeout(() =>
              {

                  document.querySelector(".cubo3D")?.classList.remove("animacion1");    //La quitamos

                  // if(!pintar(numeroMovimiento, tablero))  //Para saber si tiene o no casillas
                  // {

                  //     tirado = false;     //Para que pueda volver a tirar si no hay casillas

                  // }

              }, 500);   //Despues de 0.5s

              //tirado = true;  //Si esta true no puede lanzar hasta que se mueva o se compruebe si no pude moverse

              contadorTiradas++;  //Sumamos uno mas al contador

          }

      });

  }

}
