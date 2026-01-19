class GlobalException extends Error {

    constructor(message, name = "Exception") {
        super(message);
        this.name = name;
    }
    
}