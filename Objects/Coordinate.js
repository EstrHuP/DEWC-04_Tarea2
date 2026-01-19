class Coordinate {

    #latitude;
    #longitude;

    constructor(latitude, longitude) {
        if (!latitude || !longitude) throw new GlobalException("Latitude and longitude are obligatory", "CoordinateException");
        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    get latitude() {
        return this.#latitude;
    }

    set latitude(value) {
        if (!value) throw new GlobalException("Latitude cannot be empty", "CoordinateException");
        return this.#latitude = value;
    }

    get longitude() {
        return this.#longitude;
    }

    set longitude(value) {
        if (!value) throw new GlobalException("Longitude cannot be empty", "CoordinateException");
        return this.#longitude = value;
    }

    toString() {
        return `${this.#longitude.toString()} ${this.#latitude.toString()}`;
    }
}