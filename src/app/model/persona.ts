export class Persona {
    id?: number;
    nombre: string;
    bio: string;
    longBio: string;
    fotoPerfilUrl: string;

    constructor(nombre: string, bio: string, longBio: string, fotoPerfilUrl: string){
        this.nombre = nombre;
        this.bio = bio;
        this.longBio = longBio;
        this.fotoPerfilUrl = fotoPerfilUrl;
    }
}
