import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor() { }
  usuario:Usuario = null;
  @Output() usuarioCreado: EventEmitter<Usuario>= new EventEmitter<Usuario>();
  ngOnInit(): void {
  }
  nuevoUsuario(){
    this.usuario = new Usuario();
    this.usuario.apellido="Apellido";
    this.usuario.nombre="Nombre";
    this.usuario.legajo ="Abc001";
  }
  crearUsuario(){
    this.usuarioCreado.emit(this.usuario);
    this.usuario=null;
  }
}
