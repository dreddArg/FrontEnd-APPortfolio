import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  eduAEditar: Educacion = null;

  constructor(private sEducacionService: EducacionService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(){
    // capturamos id de educacion elegida a editar
    const id = this.activatedRouter.snapshot.params['id'];
    // traemos informacion de la edu segun el id
    this.sEducacionService.detailEdu(id).subscribe(
      data => {
        this.eduAEditar = data;
      }, err => {
        // si ocurre error avisamos
        alert("Error al obtener datos de la educacion");
        // volvemos al home por el router ''
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    // capturamos id de educacion elegida a editar
    const id = this.activatedRouter.snapshot.params['id'];
    // actualizamos los datos con lo q tomamos del form
    this.sEducacionService.updateEdu(id, this.eduAEditar).subscribe(
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
