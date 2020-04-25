import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private urlPeliculas:string = environment.urlPeliculas;
  private apiKey:string = "3a2f07fe";
  private parameter:string="t=";
  private separator="&";
  constructor(private http:HttpClient) { }

  obtenerPeliculas(){
    return this.http.get(this.urlPeliculas + this.apiKey);
  }
  obtenerUnaPelicula(pelicula:String){
    console.log(this.urlPeliculas + pelicula  +this.apiKey);
    return this.http.get(this.urlPeliculas + this.parameter + pelicula + this.separator + "apikey=" + this.apiKey);
  }
}
