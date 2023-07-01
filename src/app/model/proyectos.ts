export class Proyectos {
    id?: number;
    urlImg: string;
    nombreProyecto: string;
    descripcion: string;
    link: string;

    constructor(urlImg: string, nombreProyecto: string, descripcion: string, link: string) {
        this.urlImg = urlImg;
        this.nombreProyecto = nombreProyecto;
        this.descripcion = descripcion;
        this.link = link;
    }
}
