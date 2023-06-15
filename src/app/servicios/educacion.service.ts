import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  backendURL:string = environment.url;
  apiEducacion:string = 'api/educacion/';

  constructor(private http: HttpClient) { }

  public obtenerEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.backendURL + this.apiEducacion + `get`);
  }

  public detailEdu(id: number): Observable<Educacion> {
    // user comillas inclinadas `` si se quiere poner ruta
    return this.http.get<Educacion>(this.backendURL + this.apiEducacion + `detail/${id}`);
  }

  public saveEdu(educacion: Educacion): Observable<any> {
    return this.http.post<any>(this.backendURL + this.apiEducacion + `save`, educacion);
  }

  public updateEdu(id: number, educacion: Educacion): Observable<any> {
    return this.http.put<any>(this.backendURL + this.apiEducacion + `update/${id}`, educacion);
  }

  public deleteEdu(id: number): Observable<any> {
    return this.http.delete<any>(this.backendURL + this.apiEducacion + `delete/${id}`);
  }
}
