import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  habURL:string = 'https://backend-apportfolio.onrender.com/api/habilidades/';

  constructor(private httpClient: HttpClient) { }

  public listaHab(): Observable<Habilidades[]> {
    return this.httpClient.get<Habilidades[]>(this.habURL + `get`);
  }

  public detailHab(id: number): Observable<Habilidades> {
    return this.httpClient.get<Habilidades>(this.habURL + `detail/${id}`);
  }

  public saveHab(habilidades: Habilidades): Observable<any> {
    return this.httpClient.post<any>(this.habURL + `save`, habilidades);
  }

  public updateHab(id: number, habilidades: Habilidades): Observable<any>{
    return this.httpClient.put<any>(this.habURL + `update/${id}`, habilidades);
  }

  public deleteHab(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habURL + `delete/${id}`);
  }
}
