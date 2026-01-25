import { AbstractClassException, EmptyValueException, GlobalException, InvalidValueException } from '../Exception/GlobalException.js';

class Production {
    #title;
    #nationality;
    #publication;
    #synopsis;
    #image;

    constructor(title, nationality = "", publication, synopsis = "", image = "") {
        if (new.target === Production) throw new AbstractClassException("Production"); // Clase abstracta
        if (!title || title.trim() === "") throw new EmptyValueException("title");
        if (!publication) throw new EmptyValueException("publication");
        if (!(publication instanceof Date)) throw new InvalidValueException("publication", publication);
        this.#title = title;
        this.#nationality = nationality;
        this.#publication = publication;
        this.#synopsis = synopsis;
        this.#image = image;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        if (!value) throw new EmptyValueException("title");
        this.#title = value;
    }

    get nationality() {
        return this.#nationality;
    }

    set nationality(value) {
        this.#nationality = value;
    }

    get publication() {
        return this.#publication;
    }

    set publication(value) {
        if (!value || !(value instanceof Date)) throw new InvalidValueException("publication", value);
        this.#publication = value;
    }

    get synopsis() {
        return this.#synopsis;
    }

    set synopsis(value) {
        this.#synopsis = value;
    }

    get image() {
        return this.#image;
    }

    set image(value) {
        this.#image = value;
    }

    toString() {
        return `${this.#title} ${this.#nationality} ${this.#publication.toDateString()} (${this.#synopsis}) ${this.#image} `;
    }
}

export default Production;