import { Component, OnInit } from '@angular/core';
import { Usuario} from '../../clases/usuario';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor() { }
  title= "Nueva App";
  usuario = new Usuario();

  mostrarMensaje(){
    console.log(this.usuario);
  }
  ngOnInit(): void {
  }

}
