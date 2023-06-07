import { Component } from '@angular/core';
import { DatosWeb } from 'src/app/model/datos-web';
import { DatosWebService } from 'src/app/servicios/datos-web.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  datosWeb: DatosWeb = new DatosWeb("", "", "", "", "", "", "", "","","", 0);
  
  constructor(private datosWebService: DatosWebService) {
    this.datosWebService.obtenerDatosWeb().subscribe(data => {
      this.datosWeb = data;
    })
  }
}
