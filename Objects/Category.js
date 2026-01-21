import { EmptyValueException, InvalidAccessConstructorException } from "../Exception/GlobalException";

class Category {

    #name;
    #description;

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
        if (!value) throw new GlobalException("Name cannot be empty", "CategoryException");
        this.#name = value;
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        this.#description = value;
    }

    toString() {
        return `${this.#name} ${this.#description}`;
    }
}

export default Category;