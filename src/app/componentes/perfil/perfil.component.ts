import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  miPerfil:any;

  constructor(private datosPerfil:PortfolioService) { }

  ngOnInit(): void {
    this.datosPerfil.obtenerPerfil().subscribe(dataPerfil =>{  
      this.miPerfil = dataPerfil;
    });
  }
}
