import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  expLab: Experiencia = null;

  constructor(private sExperienciaService: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(){
    // capturamos id de experiencia a modificar
    const id = this.activatedRouter.snapshot.params['id'];
    // traemos los detalles de la experiencia indicada en el id
    this.sExperienciaService.detailExp(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {
        // si hay error damos mensaje
        alert("Error al traer el registro a modificar de Experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    // capturamos id de experiencia a modificar
    const id = this.activatedRouter.snapshot.params['id'];
    // actualizamos los datos
    this.sExperienciaService.updateExp(id, this.expLab).subscribe(
      data => {
        // volvemos a web Home
        this.router.navigate(['']);
      }, err => {
        // si hay error damos mensaje
        alert("Error al modificar registro de Experiencia");
        this.router.navigate(['']);
      }
    )
  }
}
