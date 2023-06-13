import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { StorageService } from 'src/app/servicios/storage.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {

  perAEditar: Persona = null;

  constructor(private activatedRouter: ActivatedRoute, private portfolioService: PortfolioService, private router: Router, public storageService: StorageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.portfolioService.obtenerPerfil(id).subscribe(data => {
      this.perAEditar = data;
    }, err => {
      alert("Error al editar");
      this.router.navigate(['']);
    }
    )
  }
  
  onUpdate(): void {
    // capturamos id de educacion elegida a editar
    const id = this.activatedRouter.snapshot.params['id'];
    // cargamos url de imagen elegida para previsualizar
    this.perAEditar.fotoPerfilUrl = this.storageService.urlFile;
    // actualizamos los datos con lo q tomamos del form
    this.portfolioService.updatePer(id, this.perAEditar).subscribe(
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

  uploadFile($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "picture_" + id;
    this.storageService.uploadFile($event, name);
  }

}
