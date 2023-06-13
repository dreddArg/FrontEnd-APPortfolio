import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosWeb } from '../model/datos-web';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosWebService {

  backendURL:string = 'https://backend-apportfolio.onrender.com/';
  //backendURL:string = 'http://localhost:8080/';
  apiDatosWeb:string = 'api/datosweb/get/';
  idDatosWeb:string = '1';

  constructor(private http:HttpClient) { }

  public obtenerDatosWeb():Observable<DatosWeb> {
    return this.http.get<DatosWeb>(this.backendURL+this.apiDatosWeb+this.idDatosWeb);
  }
}
