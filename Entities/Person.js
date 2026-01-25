import { EmptyValueException, InvalidValueException } from "../Exception/GlobalException.js";

class Person {

    #name; // obligatory
    #lastname1; // obligatory
    #lastname2; // opcional
    #born; // obligatory
    #picture; // opcional

    constructor(name, lastname1, lastname2, born, picture) {
        if (name === 'undefined' || name.trim() === "") throw new EmptyValueException("name");
        if (lastname1 === 'undefined' || lastname1.trim() === "") throw new EmptyValueException("lastname1");
        if (!(born instanceof Date)) throw new InvalidValueException("born", born);
        this.#name = name;
        this.#lastname1 = lastname1;
        this.#lastname2 = lastname2;
        this.#born = born;
        this.#picture = picture;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        if (!value) throw new EmptyValueException("name");
        this.#name = value;
    }

    get lastname1() {
        return this.#lastname1;
    }

    set lastname1(value) {
        if (!value || value.trim() === "") throw new EmptyValueException("lastname1");
        this.#lastname1 = value;
    }

    get lastname2() {
        return this.#lastname2;
    }

    set lastname2(value) {
        this.#lastname2 = value;
    }

    get born() {
        return this.#born;
    }

    set born(value) {
        if (!value) throw new InvalidValueException("born", value);
        this.#born = value;
    }

    get picture() {
        return this.#picture;
    }

    set picture(value) {
        this.#picture = value;
    }

    toString() {
        return `${this.#name} ${this.#lastname1} ${this.#lastname2} (${this.#born.toDateString()}) ${this.#picture} `;
    }
}

export default Person;