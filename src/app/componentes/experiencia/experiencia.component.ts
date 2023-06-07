import { Component, OnInit } from '@angular/core';
import { DatosWeb } from 'src/app/model/datos-web';
import { Experiencia } from 'src/app/model/experiencia';
import { DatosWebService } from 'src/app/servicios/datos-web.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  datosWeb: DatosWeb = new DatosWeb("", "", "", "", "", "", "", "","","", 0);
  exp: Experiencia[] = [];

  constructor(private datosWebService: DatosWebService, private sExperiencia: ExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    //cargamos experiencia
    this.cargarExperiencia();

    //cargamos datosWeb
    this.cargarDatosWeb();

    // validamos si estamos logueados o no
    if (this.tokenService.getToken()){
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

  cargarExperiencia(): void {
    this.sExperiencia.listaExp().subscribe(data => {this.exp = data})
  }

  delete(id?: number) {
    //revisamos q el id esté definido para borrar
    if (id != undefined ) {
      // en ese caso procedemos a borrar
      this.sExperiencia.deleteExp(id).subscribe (
        data => {
          // recargamos los datos a la web
          this.cargarExperiencia();
        }, err => {
          // si hubo error
          alert("No se pudo eliminar el registro")
        }
      )
    }
  }
}
