import { EmptyValueException } from '../Exception/GlobalException.js';

class Resource {

    #duration;
    #link;

    constructor(duration, link) {
        if (duration == null) throw new EmptyValueException("duration");
        if (typeof duration !== "number" || duration <= 0) throw new InvalidValueException("duration", duration);
        if (!link || link.trim() === "") throw new EmptyValueException("link");

        this.#duration = duration;
        this.#link = link;
    }

    get duration() {
        return this.#duration;
    }

    set duration(value) {
        if (!value) throw new EmptyValueException("duration");
        this.#duration = value;
    }

    get link() {
        return this.#link;
    }

    set link(value) {
        if (!value) throw new EmptyValueException("link");
        this.#link = value;
    }

    toString() {
        return `${this.#duration.toString()} ${this.#link}`;
    }
}

export default Resource;