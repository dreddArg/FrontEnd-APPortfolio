import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  expURL:string = 'https://backend-apportfolio.onrender.com/api/experiencia/';
  
  constructor(private httpClient: HttpClient) { }

  public listaExp(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expURL + `get`);
  }

  public detailExp(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }

  public saveExp(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.expURL + `save`, experiencia)
  }

  public updateExp(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public deleteExp(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
