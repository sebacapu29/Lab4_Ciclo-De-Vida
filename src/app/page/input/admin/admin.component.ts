import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }
  title="";
  listUsuarios:Usuario[]= Array<Usuario>();
  usuarioSeleccionado:Usuario;
  ngOnInit(): void {
  }
  tomarUsuarioNuevo(usuario:Usuario){
    console.log(usuario);
    this.listUsuarios.push(usuario);
  }  
  tomarUsuarioTabla(){

  }
  tomarUsuarioParaDetalles(usuario: Usuario)
  {
    this.usuarioSeleccionado=usuario;   
  }
  goHome(){
    this.router.navigate(['home']);
  }
}
