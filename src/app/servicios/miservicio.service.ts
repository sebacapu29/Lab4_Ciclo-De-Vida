import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {

  private url = environment.urlPaises;
  constructor(private miHttp:HttpClient) {
    
   }
   obtenerPaises(){
    return this.miHttp.get(this.url);
   }
}
