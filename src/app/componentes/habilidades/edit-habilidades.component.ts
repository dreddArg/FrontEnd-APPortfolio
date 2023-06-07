import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {

  habAEditar: Habilidades = null;

  constructor(private habilidadesService: HabilidadesService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    // capturamos id de educacion elegida a editar
    const id = this.activatedRouter.snapshot.params['id'];
    // traemos informacion de la edu segun el id
    this.habilidadesService.detailHab(id).subscribe(
      data => {
        this.habAEditar = data;
      }, err => {
        // si ocurre error avisamos
        alert("Error al obtener datos de la habilidad");
        // volvemos al home por el router ''
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void {
    // capturamos id de educacion elegida a editar
    const id = this.activatedRouter.snapshot.params['id'];
    // actualizamos los datos con lo q tomamos del form
    this.habilidadesService.updateHab(id, this.habAEditar).subscribe(
      data => {
        // volvemos al home x router
        this.router.navigate(['']);
      }, err => {
        // si hay error al guardar avisamos
        alert("Error al guardar nuevos datos");
        this.router.navigate(['']);
      }
    )
  }
}
