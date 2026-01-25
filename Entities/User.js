import { EmptyValueException, InvalidValueException } from '../Exception/GlobalException.js';

class User {
    #username;
    #email;
    #password;

    constructor(username, email, password) {
        if (!username) throw new EmptyValueException("username");
        if (!email) throw new EmptyValueException("email");
        if (!password) throw new EmptyValueException("password");
        this.#username = username;
        this.#email = email;
        this.#password = password;
    }

    get username() {
        return this.#username;
    }

    set username(value) {
        if (!value || typeof value !== "string") throw new InvalidValueException("username", value);
        this.#username = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        if (!value || typeof value !== "string") throw new InvalidValueException("email", value);
        this.#email = value;
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        if (!value || typeof value !== "string") throw new InvalidValueException("password", value);
        this.#password = value;
    }

    toString() {
        return `User: ${this.#username} (${this.#email})`;
    }
 }

 export default User;