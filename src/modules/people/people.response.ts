export class PeopleResponse {
    nombre: string;
    altura: string;
    masa: string;
    color_pelo: string;
    color_piel: string;
    color_ojo: string;
    anio_nacimiento: string;
    genero: string;
    mundonatal: string;
    peliculas: string[];
    especies: string[];
    vehiculos: string[];
    naves_estelares: string[];
    creado: string;
    editado: string;
    url: string;

    constructor(e?: any) {
        if (e) {
            this.nombre = (e.name ? e.name : undefined);
            this.altura = (e.height ? e.height : undefined);
            this.masa = (e.mass ? e.mass : undefined);
            this.color_pelo = (e.hair_color ? e.hair_color : undefined);
            this.color_piel = (e.skin_color ? e.skin_color : undefined);
            this.color_ojo = (e.eye_color ? e.eye_color : undefined);
            this.anio_nacimiento = (e.birth_year ? e.birth_year : undefined);
            this.genero = (e.gender ? e.gender : undefined);
            this.mundonatal = (e.homeworld ? e.homeworld : undefined);
            this.peliculas = (e.films ? e.films.map(x=> new String(x)) : undefined);
            this.especies = (e.species ? e.species.map(x=> new String(x)) : undefined);
            this.vehiculos = (e.vehicles ? e.vehicles.map(x=> new String(x)) : undefined);
            this.naves_estelares = (e.starships ? e.starships.map(x=> new String(x)) : undefined);
            
            this.creado = (e.created ? e.created : undefined);
            this.editado = (e.edited ? e.edited : undefined);
            this.url = (e.url ? e.url : undefined);
        }
    }
}