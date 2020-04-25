import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  usuario = new Usuario();

  mostrarMensaje(){
    console.log(this.usuario);
  }
  Ingresar(){
    if(this.usuario.email === 'admin' && this.usuario.password === '123'){
      this.router.navigate(["home"]);
    }
    else{
      this.router.navigate(["error"]);
    }
  }
}
