import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosWeb } from 'src/app/model/datos-web';
import { DatosWebService } from 'src/app/servicios/datos-web.service';
import { RedesSocialesService } from 'src/app/servicios/redes-sociales.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {
  isLogged = false;

  datosWeb: DatosWeb = new DatosWeb("", "", "", "", "", "", "", "","","", 0);
  redesSociales:any;

  constructor(private datosWebService: DatosWebService, private redesSocialesService: RedesSocialesService, private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.datosWebService.obtenerDatosWeb().subscribe(data =>{
      //console.log("BARRA Datos Web: " + data);
      this.datosWeb = data;
    });

    this.redesSocialesService.obtenerRedesSociales().subscribe(data => {
      this.redesSociales = data;
      //console.log(data);
    })

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }
}
