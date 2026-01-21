class Resource {

    #duration;
    #link;

    constructor(duration, link) {
        if (!duration || !link) throw new GlobalException("Duration and link are obligatory", "ResourceException");
        this.#duration = duration;
        this.#link = link;
    }

    get duration() {
        return this.#duration;
    }

    set duration(value) {
        if (!value) throw new GlobalException("Duration cannot be empty", "ResourceException");
        this.#duration = value;
    }

    get link() {
        return this.#link;
    }

    set link(value) {
        if (!value) throw new GlobalException("Link cannot be empty", "ResourceException");
        this.#link = value;
    }

    toString() {
        return `${this.#duration.toString()} ${this.#link}`;
    }
}

export default Resource;