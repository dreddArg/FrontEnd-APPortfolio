import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url:string = 'https://backend-apportfolio.onrender.com/api/educacion/';
  getEducacion:string = 'get/';

  constructor(private http: HttpClient) { }

  public obtenerEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.url+this.getEducacion);
  }

  public detailEdu(id: number): Observable<Educacion> {
    // user comillas inclinadas `` si se quiere poner ruta
    return this.http.get<Educacion>(this.url + `detail/${id}`);
  }

  public saveEdu(educacion: Educacion): Observable<any> {
    return this.http.post<any>(this.url + `save`, educacion);
  }

  public updateEdu(id: number, educacion: Educacion): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, educacion);
  }

  public deleteEdu(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}
