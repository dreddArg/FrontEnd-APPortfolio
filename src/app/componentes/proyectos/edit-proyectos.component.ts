import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {

  proyecto: Proyectos = null;

  constructor(private sProyectosService: ProyectosService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit() {
    // tomamos id de proyecto a editar
    const id = this.activatedRouter.snapshot.params['id'];
    // traemos detalles del proyecto a editar
    this.sProyectosService.detailPro(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        // si hay error mensaje
        alert("Error al buscar datos del proyecto a editar");
        this.router.navigate(['']);
      }
    )
    
  }

  onUpdate(): void {
    // capturamos id de proyecto a editar
    const id = this.activatedRouter.snapshot.params['id'];
    // actualizamos datos
    this.sProyectosService.updatePro(id, this.proyecto).subscribe(
      data => {
        // regreso a home
        this.router.navigate(['']);
      }, err => {
        // si hay error
        alert("Error al editar proyecto");
        this.router.navigate(['']);
      }
    )
  }
}
