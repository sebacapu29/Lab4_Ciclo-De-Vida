import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-admin-peliculas',
  templateUrl: './admin-peliculas.component.html',
  styleUrls: ['./admin-peliculas.component.css']
})
export class AdminPeliculasComponent implements OnInit {

  pelicula:any;
  lPeliculas:any[];  
  pathPelicula:String;
  objListaPeliculas:Pelicula[];
  objPelicula:Pelicula;
  lPeliculasMock:string[];
  peliculaSelectParaDetalle:Pelicula;
  componenteFavoritos:boolean=false;

  constructor(private miServicioPeliculas:PeliculasService) {
    this.lPeliculas = new Array<any>();
    this.lPeliculasMock = ["the avengers","alien","anita","batman","bolt",
                            "carancho","deja vu","die hard","el padrino","el turista",
                            "futurama","gladiador","hannibal","iron man","indiana jones","jurassic park",
                            "karate kid","legion","logan","max payne","meteoro","poseidon",
                            "resident evil","silent hill","star wars","tron","tiburon","van helsing"]
  }

 ngOnInit(): void {

  for (const pelicula in this.lPeliculasMock) {
    

   this.miServicioPeliculas.obtenerUnaPelicula(this.lPeliculasMock[pelicula]).subscribe(resp=>{
    //  this.pelicula = resp;
     this.objPelicula = <Pelicula>resp;
     this.pelicula = {"Titulo":this.objPelicula.Title,
                      "Genero":this.objPelicula.Genre,
                      "Poster":this.objPelicula.Poster,
                      "Director":this.objPelicula.Director,
                       "Duracion":this.objPelicula.Runtime,
                        "Anio":this.objPelicula.Year};                        
     this.lPeliculas.push(this.pelicula);    
     this.peliculaSelectParaDetalle= this.pelicula;
   });
  }

 }
 tomarPeliculaSeleccionada(pelicula:Pelicula){
    this.peliculaSelectParaDetalle=pelicula;
 }
 tomarSiEsFavorito(esFavorito){
     this.componenteFavoritos=esFavorito;
   
 }
 ocultarFavorito(ocultarFavorito){
  this.componenteFavoritos=ocultarFavorito;
 }
}
