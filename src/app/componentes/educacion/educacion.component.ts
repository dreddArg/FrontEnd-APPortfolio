import { Component, OnInit } from '@angular/core';
import { DatosWeb } from 'src/app/model/datos-web';
import { Educacion } from 'src/app/model/educacion';
import { DatosWebService } from 'src/app/servicios/datos-web.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  datosWeb: DatosWeb; // = new DatosWeb("", "", "", "", "", "", "", "","","", 0);
  educacion: Educacion[] = [];

  constructor(private datosWebService: DatosWebService, private educacionService: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    // cargamos datos para el sector educacion
    this.cargarEducacion();
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

  cargarEducacion(): void {
    this.educacionService.obtenerEducacion().subscribe(
      data =>{
        this.educacion = data;
      })
  }

  deleteEducacion(id?: number) {
    if (id != undefined) {
      this.educacionService.deleteEdu(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar el registro");
        }
      )
    }
  }


}
