import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { AdminComponent } from './page/input/admin/admin.component';
import { AdminPeliculasComponent } from './page-peliculas/admin-peliculas/admin-peliculas.component';

const routes: Routes = [
  {path:'', component:BienvenidaComponent},
  {path:'login',component:LoginComponent}, //Sin especificar routeo nos redirige al login
  {path:'home', component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'peliculas',component:AdminPeliculasComponent},
  {path:'**',component:ErrorComponent}//Si pongo ** es porque ingresamos cualquier ruta que nos muestra el componente error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
