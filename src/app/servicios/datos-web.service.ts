import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosWeb } from '../model/datos-web';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosWebService {

  backendURL:string = environment.url;
  apiDatosWeb:string = 'api/datosweb/get/';
  idDatosWeb:string = '1';

  constructor(private http:HttpClient) { }

  public obtenerDatosWeb():Observable<DatosWeb> {
    return this.http.get<DatosWeb>(this.backendURL+this.apiDatosWeb+this.idDatosWeb);
  }
}
