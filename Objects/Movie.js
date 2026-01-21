import Production from './Production.js';
import Resource from './Resource.js';
import Coordinate from './Coordinate.js';
import GlobalException from 'GlobalException.js';

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
        if (!(value instanceof Resource)) throw new GlobalException("Resource must to be Resource object", "MovieException");
        this.#resource = value;
    }

    get locations() {
        return this.#locations;
    }

    set locations(value) {
        if (!Array.isArray(value)) throw new GlobalException("Locations must be an array");
        for (const location of value) {
            if (!(location instanceof Coordinate)) throw new GlobalException("Locations must contain Coordinate objects");
        }
        this.#locations = value;
    }

    toString() {
        return  `Movie: ${this.title}`;
    }
}

export default Movie;