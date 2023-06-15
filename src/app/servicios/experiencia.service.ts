import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  backendURL:string = environment.url;
  apiExperiencia: string = 'api/experiencia/';
  
  constructor(private httpClient: HttpClient) { }

  public listaExp(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.backendURL + this.apiExperiencia + `get`);
  }

  public detailExp(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.backendURL + this.apiExperiencia + `detail/${id}`);
  }

  public saveExp(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.backendURL + this.apiExperiencia + `save`, experiencia)
  }

  public updateExp(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.backendURL + this.apiExperiencia + `update/${id}`, experiencia);
  }

  public deleteExp(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.backendURL + this.apiExperiencia + `delete/${id}`);
  }
}
