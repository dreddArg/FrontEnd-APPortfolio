import { Component, OnInit } from '@angular/core';
import { DatosWeb } from 'src/app/model/datos-web';
import { Habilidades } from 'src/app/model/habilidades';
import { DatosWebService } from 'src/app/servicios/datos-web.service';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  datosWeb: DatosWeb; // = new DatosWeb("", "", "", "", "", "", "", "","","", 0);
  habilidades: Habilidades[] = [];
  habilidades2: Habilidades[];
  sergio: string;

  constructor(private datosWebService: DatosWebService, private habilidadesService: HabilidadesService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    // cargamos datos para el sector habilidades
    this.cargarHabilidades();
    this.cargarDatosWeb();

    // validamos si estamos logueados o no
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarDatosWeb(): void {
    this.datosWebService.obtenerDatosWeb().subscribe(
      data => {
        this.datosWeb = data;
      }
    )
  }
  
  cargarHabilidades(): void {
    this.habilidadesService.listaHab().subscribe(
      data =>{
        this.habilidades = data;
      })
  }

  deleteHabilidades(id?: number) {
    if (id != undefined) {
      this.habilidadesService.deleteHab(id).subscribe(
        data => {
          this.cargarHabilidades();
        }, err => {
          alert("No se pudo eliminar el registro");
        }
      )
    }
  }

}
