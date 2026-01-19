class Category {

    #name;
    #description;

    constructor(name, description = "") {
        if (!name) throw new GlobalException("Name is obligatory", "CategoryException");
        this.#name = name;
        this.#description = description;
    }

    get nameCategory() {
        return this.#name;
    }

    set nameCategory(value) {
        if (!value) throw new GlobalException("Name cannot be empty", "CategoryException");
        return this.#name = value;
    }

    get descriptionCategory() {
        return this.#description;
    }

    set descriptionCategory(value) {
        return this.#description = value;
    }

    toString() {
        return `${this.#name} ${this.#description}`;
    }
}