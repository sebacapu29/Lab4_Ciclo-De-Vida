import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent implements OnInit {

  constructor() { }
  @Input() listaUsuarios:Usuario[]= null;
  @Output() usuarioSeleccionado: EventEmitter<Usuario> = new EventEmitter<Usuario>();
  
  ngOnInit(): void {
  }
  mostrarDetalleUsuario(usuario:Usuario){
    this.usuarioSeleccionado.emit(usuario);
  }
}
