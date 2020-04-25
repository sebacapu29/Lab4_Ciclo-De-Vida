import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  @Input() listadoPeliculas;
  @Output() peliculaSeleccionada: EventEmitter<any>;
  @Output() esFavorito: EventEmitter<boolean>;
  peliculaActual:Pelicula;
  collectionSize = 0;
  page = 1;
  pageSize = 4;
  constructor() { 
    this.peliculaSeleccionada = new EventEmitter<any>();
    this.esFavorito=new EventEmitter<boolean>();
    
  }


  ngOnInit(): void {
    this.collectionSize = this.listadoPeliculas.length;
  }
  guardarFavoritos(){

  }
  onPeliculaSeleccionada(peliculaSelect:Pelicula,favorito=null){
    
    this.peliculaSeleccionada.emit(peliculaSelect);
    if(favorito){
      this.esFavorito.emit(true);
    }
    else{
      this.esFavorito.emit(false);
    }
  }
  // get peliculas(): Pelicula[] {
  //   return this.listadoPeliculas
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }
}
