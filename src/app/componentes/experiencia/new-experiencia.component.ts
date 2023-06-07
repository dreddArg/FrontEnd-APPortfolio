import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  logo: string = '';
  nombreEmpresa: string = '';
  fechaInicial: string = '';
  fechaFinal: string = '';
  descripcion: string = '';

  constructor(private sExperiencia: ExperienciaService, private router: Router) {}

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const expe = new Experiencia(this.logo, this.nombreEmpresa, this.fechaInicial, this.fechaFinal, this.descripcion);
    this.sExperiencia.saveExp(expe).subscribe(
      data => {
        alert("Experiencia agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Falla");
        this.router.navigate(['']);
      }
    )
  }

}
