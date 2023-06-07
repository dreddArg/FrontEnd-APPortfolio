export class DatosWeb {
    id?: number;
    titulo: string;
    logoPrincipalUrl: string;
    hrefPrincipal: string;
    imagenPrincipalUrl: string;
    experienciaTitulo: string;
    educacionTitulo: string;
    habilidadesTitulo: string;
    proyectosTitulo: string;
    footerAutor: string;
    footerLocalidad: string;
    personaActiva_id: number;

    constructor(titulo: string, logoPrincipalUrl: string, hrefPrincipal: string, imagenPrincipalUrl: string, experienciaTitulo: string, educacionTitulo: string,
        habilidadesTitulo: string, proyectosTitulo: string, footerAutor: string, footerLocalidad: string, personaActiva_id: number) {
            this.titulo = titulo;
            this.logoPrincipalUrl = logoPrincipalUrl;
            this.hrefPrincipal = hrefPrincipal;
            this.imagenPrincipalUrl = imagenPrincipalUrl;
            this.experienciaTitulo = experienciaTitulo;
            this.educacionTitulo = educacionTitulo;
            this.habilidadesTitulo = habilidadesTitulo;
            this.proyectosTitulo = proyectosTitulo;
            this.footerAutor = footerAutor;
            this.footerLocalidad = footerLocalidad;
            this.personaActiva_id = personaActiva_id;
        }
}
