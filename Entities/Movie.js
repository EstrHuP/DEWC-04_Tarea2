import Production from './Production.js';
import Resource from './Resource.js';
import Coordinate from './Coordinate.js';
import { EmptyValueException, InvalidValueException } from '../Exception/GlobalException.js';

class Movie extends Production {

    #resource;
    #locations;

    constructor(title, nationality = "", publication, sypnopsis = "", image = "", resource = "", locations = []) {
        super(title, nationality, publication, sypnopsis, image);
        this.resource = resource;
        this.locations = locations;
    }

    get resource() {
        return this.#resource;
    }

    set resource(value) {
        if (!value) throw new EmptyValueException("resource");
        if (!(value instanceof Resource)) throw new InvalidValueException("resource", value);        
        this.#resource = value;
    }

    get locations() {
        return this.#locations;
    }

    set locations(value) {
        if (!Array.isArray(value)) throw new InvalidValueException("locations", value);
        for (const location of value) {
            if (!(location instanceof Coordinate)) throw new InvalidValueException("locations item", location);
        }
        this.#locations = value;
    }

    toString() {
        return  `Movie: ${this.title}`;
    }
}

export default Movie;