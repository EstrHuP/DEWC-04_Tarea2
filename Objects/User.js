class User {
    #username;
    #email;
    #password;

    constructor(username, email, password) {
        if (!username || !email || !password) throw new GlobalException("Username, email and password are obligatory", "UserException");
        this.#username = username;
        this.#email = email;
        this.#password = password;
    }

    get username() {
        return this.#username;
    }

    set username(value) {
        if (!value || typeof value !== "string") throw new GlobalException("Username is mandatory and must be a string", "UserException");
        this.#username = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        if (!value || typeof value !== "string") throw new GlobalException("Email is mandatory and must be a string", "UserException");
        this.#email = value;
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        if (!value || typeof value !== "string") throw new GlobalException("Password is mandatory and must be a string");
        this.#password = value;
    }

    toString() {
        return `User: ${this.#username} (${this.#email})`;
    }
 }

 export default User;