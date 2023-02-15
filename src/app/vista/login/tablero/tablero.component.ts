import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit{

    ngOnInit(): void {

        //Variables
        let tablero = document.createElement("table");
        tablero.id = "tablero";

        let img = document.createElement("img");    //Imagen del personaje
        img.id = "moni";

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

            tablero.appendChild(tr);

        }

        document.getElementById("contenedor-tabla")?.appendChild(tablero);

        document.getElementsByTagName("tr")[0].getElementsByTagName("td")[0].id = "inicio";
        document.getElementsByTagName("tr")[0].getElementsByTagName("td")[0].appendChild(img);

        document.getElementsByTagName("tr")[9].getElementsByTagName("td")[9].id = "fin";



    }

}
