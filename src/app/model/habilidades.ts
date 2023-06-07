export class Habilidades {
    id?: number;
    nombreHab: string;
    porcentaje: number;

    constructor(nombreHab: string, porcentaje: number) {
        this.nombreHab = nombreHab;
        this.porcentaje = porcentaje;
    }

}
