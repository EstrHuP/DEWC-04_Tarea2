class Production {
    #title;
    #nacionality;
    #publication;
    #synopsis;
    #image;

    constructor(title, nacitonality = "", publication, synopsis = "", image = "") {
        if (!title || !publication) throw new GlobalException("Title and publication are obligatory", "ProductionException");
        this.#title = title;
        this.#nacionality = nacitonality;
        this.#publication = publication;
        this.#synopsis = synopsis;
        this.#image = image;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        if (!value) throw new GlobalException("Title cannot be empty", "ProductionException");
        return this.#title = value;
    }

    get nacitonality() {
        return this.#nacionality;
    }

    set nacitonality(value) {
        return this.#nacionality = value;
    }

    get publication() {
        return this.#publication;
    }

    set publication(value) {
        if (!value) throw new GlobalException("Publication date cannot be empty", "ProductionException");
        return this.#publication = value;
    }

    get synopsis() {
        return this.#synopsis;
    }

    set synopsis(value) {
        return this.#synopsis = value;
    }

    get image() {
        return this.#image;
    }

    set image(value) {
        return this.#image = value;
    }

    toString() {
        return `${this.#title} ${this.#nacionality} ${this.#publication.toDateString()} (${this.#synopsis}) ${this.#image} `;
    }
}