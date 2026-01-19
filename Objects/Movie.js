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
        return this.#resource = value;
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