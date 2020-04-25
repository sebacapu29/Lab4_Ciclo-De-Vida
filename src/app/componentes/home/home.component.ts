import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiservicioService } from 'src/app/servicios/miservicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  lPaises:any[];
  constructor(private router:Router,private miServicio:MiservicioService) {
    // this.lPaises = miServicio.obtenerPaises();

   }
  
  expression = false;
 

  lista = [{name:"Matias", perfil:1},{name:"Octavio", perfil:2},{name:"Mario", perfil:3}];

  ngOnInit(): void {
    // this.miServicio.obtenerPaises().subscribe(resultado=> {
    //   console.log(resultado);
    // },error=> {
    //   console.log(error);
    // });
  }
  ocultarMostrar(){
    this.expression = !this.expression;
  }
  irAPaginaPrincipal(){
    this.router.navigate(["admin"]);
  }
  irAPaginaPeliculas(){
    this.router.navigate(["peliculas"]);
  }
}
