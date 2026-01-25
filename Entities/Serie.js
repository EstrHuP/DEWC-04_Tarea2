import Production from './Production.js';
import { GlobalException, InvalidValueException } from '../Exception/GlobalException.js';

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
        if (!Array.isArray(value)) throw new InvalidValueException("resources", value);
        for (const resource of value) {
            if (!(resource instanceof Resource)) throw new InvalidValueException("invalid object", resource);
        }
        this.#resources = value;
    }

    get locations() {
        return this.#locations;
    }

     set locations(value) {
        if (!Array.isArray(value)) throw new InvalidValueException("locations", value);
        for (const location of value) {
            if (!(location instanceof Coordinate)) throw new InvalidValueException("invalid object", location);
        }
        this.#locations = value;
    }

    get seasons() {
        return this.#seasons;
    }

     set seasons(value) {
        if (typeof value !== Number) throw new InvalidValueException("seasons", value);
        this.#locations = value;
    }

    toString() {
        return `${this.#resources} ${this.#locations} ${this.#seasons.toString()}`;
    }
}

export default Serie;