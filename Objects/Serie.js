import Production from './Production.js';

class Serie extends Production {

    #resources;
    #locations;
    #seasons;

    constructor(title, nationality = "", publication, sypnopsis = "", image = "", resources, locations, seasons) {
        super(title, nationality, publication, sypnopsis, image);
        this.#resources = resources;
        this.#locations = locations;
        this.#seasons = seasons;
    }

    get resources() {
        return this.#resources;
    }

     set resources(value) {
        if (!Array.isArray(value)) throw new GlobalException("Resources must be an array");
        for (const resource of value) {
            if (!(resource instanceof Resource)) throw new GlobalException("Resource must contain Resource object");
        }
        this.#resources = value;
    }

    get locations() {
        return this.#locations;
    }

     set locations(value) {
        if (!Array.isArray(value)) throw new GlobalException("Resources must be an array");
        for (const location of value) {
            if (!(location instanceof Coordinate)) throw new GlobalException("Location must contain Coordinate object");
        }
        this.#locations = value;
    }

    get seasons() {
        return this.#seasons;
    }

     set seasons(value) {
        if (typeof value !== Number) throw new GlobalException("Location must be a Number");
        this.#locations = value;
    }

    toString() {
        return `${this.#resources} ${this.#locations} ${this.#seasons.toString()}`;
    }
}

export default Serie;