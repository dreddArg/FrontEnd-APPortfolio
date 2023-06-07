import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})
export class NewHabilidadesComponent implements OnInit{

  nombreHab: string;
  porcentaje: number;

  constructor(private habilidadesService: HabilidadesService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void {
    const habilidades = new Habilidades(this.nombreHab, this.porcentaje);
    this.habilidadesService.saveHab(habilidades).subscribe(
      data => {
        alert("Habilidad guardada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falla al agregar");
        this.router.navigate(['']);
      }
    )
  }

}
