export class Experiencia {
    id?: number;
    logo: string;
    nombreEmpresa: string;
    fechaInicial: string;
    fechaFinal: string;
    descripcion: string;

    constructor(logo: string, nombreEmpresa: string, fechaInicial: string, fechaFinal: string, descripcion: string) {
        this.logo = logo;
        this.nombreEmpresa = nombreEmpresa;
        this.fechaInicial = fechaInicial;
        this.fechaFinal = fechaFinal;
        this.descripcion = descripcion;
    }

}
