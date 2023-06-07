import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosWeb } from '../model/datos-web';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosWebService {

  url:string = 'https://backend-apportfolio.onrender.com/api/datosweb/';
  getDatosWeb:string = 'get/';
  idDatosWeb:string = '1';

  constructor(private http:HttpClient) { }

  public obtenerDatosWeb():Observable<DatosWeb> {
    return this.http.get<DatosWeb>(this.url+this.getDatosWeb+this.idDatosWeb);
  }
}
