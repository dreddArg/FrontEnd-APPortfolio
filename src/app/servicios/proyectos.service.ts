import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  backendUrl: string = environment.url;
  apiProyectos: string = 'api/proyectos/';

  constructor(private httpClient: HttpClient) { }

  public listaPro(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.backendUrl + this.apiProyectos + `get`);
  }

  public detailPro(id: number): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(this.backendUrl + this.apiProyectos + `detail/${id}`);
  }

  public savePro(proyectos: Proyectos): Observable<any> {
    return this.httpClient.post<any>(this.backendUrl + this.apiProyectos + `save`, proyectos);
  }

  public updatePro(id: number, proyectos: Proyectos): Observable<any> {
    return this.httpClient.put<any>(this.backendUrl + this.apiProyectos + `update/${id}`, proyectos);
  }

  public deletePro(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.backendUrl + this.apiProyectos + `delete/${id}`);
  }
}
