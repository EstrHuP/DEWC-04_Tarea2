import { InvalidValueException } from "../Exception/GlobalException.js";

class Coordinate {

    #latitude; //obligatory
    #longitude; // obligatory

    constructor(latitude = 0, longitude = 0) {
        latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf() : 0;
        if (Number.isNaN(latitude)) throw new InvalidValueException("latitude", latitude);
        longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf() : 0;
        if (Number.isNaN(longitude)) throw new InvalidValueException("longitude", longitude);
        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    get latitude() {
        return this.#latitude;
    }

    set latitude(value) {
        value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
        if (Number.isNaN(value)) throw new InvalidValueException("latitude", value)
        if (!value) throw new GlobalException("Latitude cannot be empty", "CoordinateException");
        this.#latitude = value;
    }

    get longitude() {
        return this.#longitude;
    }

    set longitude(value) {
        value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
        if (Number.isNaN(value)) throw new InvalidValueException("longitude", value);
        this.#longitude = value;
    }

    toString() {
        return `${this.#longitude.toString()} ${this.#latitude.toString()}`;
    }
}

export default Coordinate;