import { EmptyValueException, InvalidAccessConstructorException } from "../Exception/GlobalException.js";

class Category {

    #name; // obligatory
    #description; // opcional

    constructor(name, description = "") {
        if (!new.target) throw new InvalidAccessConstructorException();
        if (!name) throw new EmptyValueException('name');
        this.#name = name;
        this.#description = description;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        if (value === 'undefined' || value === '') throw new EmptyValueException("name");
        this.#name = value;
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        this.#description = value;
    }

    toString() {
        return "Category: " + this.#name + "(" + this.#description + ")";
    }
}

export default Category;