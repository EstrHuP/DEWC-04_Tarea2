class Person {

    #name;
    #lastname1;
    #lastname2;
    #born;
    #picture;

    constructor(name, lastname1, lastname2 = "", born, picture = "") {
        if (!name || !lastname1 || !born) throw new GlobalException("Name, Lastname1 and Born are obligatory", "Person Exception");
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
        if (!value) throw new GlobalException("Name cannot be empty");
        this.#name = value;
    }

    get lastname1() {
        return this.#lastname1;
    }

    set lastname1(value) {
        if (!value) throw new GlobalException("Lastname1 cannot be empty");
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
        if (!value) throw new GlobalException("Born cannot be empty");
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