export class Educacion {
    id?: number;
    nombreInstitucion: string;
    fecha: string;
    descripcion: string;

    constructor(nombreInstitucion: string, fecha: string, descripcion: string){
        this.nombreInstitucion = nombreInstitucion;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }
}
