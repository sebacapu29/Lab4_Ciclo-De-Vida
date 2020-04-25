import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-favorito-pelicula',
  templateUrl: './favorito-pelicula.component.html',
  styleUrls: ['./favorito-pelicula.component.css']
})
export class FavoritoPeliculaComponent implements OnInit {

  // @Output() peliculaSeleccionada:Pelicula;
  @Input() peliculaParaFavorito:any;
  @Output() componenteFavorito:EventEmitter<any> = new EventEmitter<any>();
  peliculasEnLocalStorage:any[] = new Array<any>();

  constructor() { }

  ngOnInit(): void {
  }
  agregarFavorito(){
    var peliculas= sessionStorage.getItem("favoritos");

        sessionStorage.removeItem("usuarios");
        if(peliculas!= null){     
          this.peliculasEnLocalStorage = JSON.parse(peliculas);
        }
          this.peliculasEnLocalStorage.push({ "titulo" : this.peliculaParaFavorito.Titulo, "duracion": this.peliculaParaFavorito.Duracion,"director":this.peliculaParaFavorito.Director,"genero":this.peliculaParaFavorito.Genero,"pathImg":this.peliculaParaFavorito.Poster,"anio":this.peliculaParaFavorito.Anio});
          sessionStorage.setItem("usuarios",JSON.stringify(this.peliculasEnLocalStorage));            
          this.componenteFavorito.emit(false);
          alert("Agregada");
        }     
      }