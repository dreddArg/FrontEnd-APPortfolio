import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  backendURL:string = 'https://backend-apportfolio.onrender.com/';
  //backendURL:string = 'http://localhost:8080/';
  apiHabilidades: string = 'api/habilidades/';

  constructor(private httpClient: HttpClient) { }

  public listaHab(): Observable<Habilidades[]> {
    return this.httpClient.get<Habilidades[]>(this.backendURL + this.apiHabilidades + `get`);
  }

  public detailHab(id: number): Observable<Habilidades> {
    return this.httpClient.get<Habilidades>(this.backendURL + this.apiHabilidades + `detail/${id}`);
  }

  public saveHab(habilidades: Habilidades): Observable<any> {
    return this.httpClient.post<any>(this.backendURL + this.apiHabilidades + `save`, habilidades);
  }

  public updateHab(id: number, habilidades: Habilidades): Observable<any>{
    return this.httpClient.put<any>(this.backendURL + this.apiHabilidades + `update/${id}`, habilidades);
  }

  public deleteHab(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.backendURL + this.apiHabilidades + `delete/${id}`);
  }
}
