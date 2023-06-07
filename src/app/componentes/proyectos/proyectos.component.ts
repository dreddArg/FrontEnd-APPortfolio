import { Component } from '@angular/core';
import { DatosWeb } from 'src/app/model/datos-web';
import { DatosWebService } from 'src/app/servicios/datos-web.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  datosWeb: DatosWeb = new DatosWeb("", "", "", "", "", "", "", "","","", 0);
  proyectos:any;

  constructor(private datosWebService: DatosWebService, private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosWebService.obtenerDatosWeb().subscribe(data =>{
      this.datosWeb = data;
    });
    
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      // console.log(data);
      this.proyectos = data.proyectos;
      // console.log(this.redesSociales)
    });
  }
}
