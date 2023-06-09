import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedesSociales } from '../model/redes-sociales';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RedesSocialesService {

  backendURL:string = environment.url;
  apiRedesSociales:string = 'api/redessociales/';

  constructor(private http: HttpClient) { }

  obtenerRedesSociales():Observable<RedesSociales[]> {
    return this.http.get<RedesSociales[]>(this.backendURL + this.apiRedesSociales + `get`);
  }
  
}
