import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { AdminComponent } from './page/input/admin/admin.component';
import { UsuarioComponent } from './page/input/usuario/usuario.component';
import { FormUsuarioComponent } from './page/input/form-usuario/form-usuario.component';
import { TablaUsuarioComponent } from './page/input/tabla-usuario/tabla-usuario.component';
import { DetalleUsuarioComponent } from './page/input/detalle-usuario/detalle-usuario.component';
import { MiservicioService } from './servicios/miservicio.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminPeliculasComponent } from './page-peliculas/admin-peliculas/admin-peliculas.component';
import { ListadoPeliculasComponent } from './page-peliculas/listado-peliculas/listado-peliculas.component';
import { DetallePeliculasComponent } from './page-peliculas/detalle-peliculas/detalle-peliculas.component';
import { FavoritoPeliculaComponent } from './page-peliculas/favorito-pelicula/favorito-pelicula.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    AdminComponent,
    UsuarioComponent,
    FormUsuarioComponent,
    TablaUsuarioComponent,
    DetalleUsuarioComponent,
    AdminPeliculasComponent,
    ListadoPeliculasComponent,
    DetallePeliculasComponent,
    FavoritoPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [MiservicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
