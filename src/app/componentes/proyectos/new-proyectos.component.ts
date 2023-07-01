import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {

  urlImg: string = '';
  nombreProyecto: string = '';
  descripcion: string = '';
  link: string = '';

  constructor(private sProyectos: ProyectosService, private router: Router) {}

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const proy = new Proyectos(this.urlImg, this.nombreProyecto, this.descripcion, this.link);
    this.sProyectos.savePro(proy).subscribe(
      data => {
        alert("Proyecto agregado");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo");
        this.router.navigate(['']);
      }
    )
  }

}
