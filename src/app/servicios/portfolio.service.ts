import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  backendURL:string = environment.url;
  apiPersonas: string = 'api/personas/';
  
  constructor(private http:HttpClient) { }

  public obtenerPerfil(id: number):Observable<Persona> { 
    //return this.http.get('/assets/data/data.json');
    return this.http.get<Persona>(this.backendURL + this.apiPersonas + `get/${id}`);
  }

  public updatePerfil(id: number, persona: Persona): Observable<any> {
    return this.http.put<any>(this.backendURL + this.apiPersonas + `update/${id}`, persona);
  }
}
