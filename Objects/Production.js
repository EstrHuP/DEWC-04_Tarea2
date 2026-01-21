class Production {
    #title;
    #nationality;
    #publication;
    #synopsis;
    #image;

    constructor(title, nationality = "", publication, synopsis = "", image = "") {
        if (new.target === Production) throw new GlobalException("Production is an abstract object", "ProductionException"); // Clase abstracta
        if (!title || !publication) throw new GlobalException("Title and publication are obligatory", "ProductionException");
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
        if (!value) throw new GlobalException("Title cannot be empty", "ProductionException");
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
        if (!value || !(value instanceof Date)) throw new GlobalException("Publication date cannot be empty", "ProductionException");
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