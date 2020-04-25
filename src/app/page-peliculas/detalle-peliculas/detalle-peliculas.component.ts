import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-peliculas',
  templateUrl: './detalle-peliculas.component.html',
  styleUrls: ['./detalle-peliculas.component.css']
})
export class DetallePeliculasComponent implements OnInit {


  @Input() peliculaParaDetalle:any;
  pathPeliculaSeleccionada:string;
  constructor() { 
    // this.peliculaParaDetalle = new Pelicula();
    // this.peliculaParaDetalle.Title = "N";
  }
  ngOnInit(): void {    
  }

}
