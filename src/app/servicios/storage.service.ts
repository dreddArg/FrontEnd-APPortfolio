import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  urlFile: string = "";

  constructor(private storage: Storage) { }

  public uploadFile($event:any, name:string){
    // capturamos el archivo elegido para subir
    const file = $event.target.files[0];
    // establecemos la ruta y nombre a guardar en el storage
    const imgRef = ref(this.storage, `img/profile/` + name)
    // subimos archivo, esperamos promises then y catch
    uploadBytes (imgRef, file)
      .then(response => {this.getFiles()})
      .catch(error => console.log(error)
      )
  }

  public getFiles(){
    // definimos de donde vamos a buscar el archivo
    const filesRef = ref(this.storage, `img/profile`)
    // list de libreria firebase, tambien promises then y catch
    list(filesRef)
    // async para esperar respuesta tardia de la informacion
    .then(async response => {
      // recorremos archivos en esa carpeta
      for (let item of response.items) {
        // levantamos la url de los archivos
        this.urlFile = await getDownloadURL(item);
        // prueba 
        console.log("Url de archivo: " + this.urlFile);
      }
    })
    .catch(error => console.log(error)
    )
  }
}
