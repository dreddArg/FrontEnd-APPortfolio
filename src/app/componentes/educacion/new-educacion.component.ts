import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  nombreInstitucion: string;
  fecha: string;
  descripcion: string;

  constructor(private educacionService: EducacionService, private router: Router){}

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreInstitucion, this.fecha, this.descripcion);
    this.educacionService.saveEdu(educacion).subscribe(
      data => {
        alert("Educacion guardada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falla al agregar");
        this.router.navigate(['']);
      }
    )
  }
}
