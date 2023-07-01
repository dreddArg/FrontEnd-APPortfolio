import { Component } from '@angular/core';
import { DatosWeb } from 'src/app/model/datos-web';
import { Proyectos } from 'src/app/model/proyectos';
import { DatosWebService } from 'src/app/servicios/datos-web.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  datosWeb: DatosWeb = new DatosWeb("", "", "", "", "", "", "", "","","", 0);
  proyectos: Proyectos[] = [];

  constructor(private datosWebService: DatosWebService, private sProyectos: ProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    
    //cargamos proyectos
    this.cargarProyectos();
    // cargamos datosWeb
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

  cargarProyectos(): void {
    this.sProyectos.listaPro().subscribe(data => {this.proyectos = data})
  }

  delete(id?: number){
    //revisamos q el id este definido para borrar
    if (id != undefined) {
      //si esta definido, borramos
      this.sProyectos.deletePro(id).subscribe(
        data => {
          //recargamos los datos
          this.cargarProyectos();
        }, err => {
          //si hubo error
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
