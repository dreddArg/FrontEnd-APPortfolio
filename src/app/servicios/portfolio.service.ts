import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url:string = 'https://backend-apportfolio.onrender.com/api/personas/get/';
  
  constructor(private http:HttpClient) { }

  // *a remover* obtener datos de JSON
  obtenerDatos():Observable<any> { 
    return this.http.get('/assets/data/data.json');
  }

  obtenerPerfil():Observable<Persona> { 
    //return this.http.get('/assets/data/data.json');
    return this.http.get<Persona>(this.url+"1");
  }
}
