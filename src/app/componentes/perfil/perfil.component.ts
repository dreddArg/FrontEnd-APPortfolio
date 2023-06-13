import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  miPerfil: Persona = null;

  constructor(public datosPerfil:PortfolioService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.obtenerPerfil();

    // validamos si estamos logueados o no
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  obtenerPerfil(){
    this.datosPerfil.obtenerPerfil(1).subscribe(dataPerfil =>{  
      this.miPerfil = dataPerfil;
    });
  }
}
