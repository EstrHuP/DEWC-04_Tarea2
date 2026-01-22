import {
  BaseException,
  EmptyValueException,
  InvalidAccessConstructorException,
  InvalidValueException,
} from "./Exception/GlobalException";
import Category from "./Objects/Category";
import Production from "./Objects/Production";
import User from "./Objects/User";
import Person from "./Objects/Person";

// EXCEPTIONS
class VideoSystemException extends BaseException {
  constructor(message = "VideoSystem Exception", fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "VideoSystemException";
  }
}

// MARK: - Exception - Category

class InvalidCategoryException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super(
      "La categoría no puede ser null o no es un objeto Category.",
      fileName,
      lineNumber,
    );
    this.name = "InvalidCategoryException";
  }
}

class CategoryExistsException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("La categoría ya existe", fileName, lineNumber);
    this.name = "CategoryExistsException";
  }
}

class CategoryNotExistException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("La categoría no está registrada", fileName, lineNumber);
    this.name = "CategoryNotExistException";
  }
}

// MARK: - Exception - User

class InvalidUserException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super(
      "El usuario no puede ser null o no es un objeto User.",
      fileName,
      lineNumber,
    );
    this.name = "InvalidUserException";
  }
}

class UserExistsException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("El usuario ya existe", fileName, lineNumber);
    this.name = "UserExistsException";
  }
}

class EmailExistsException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("El email ya existe", fileName, lineNumber);
    this.name = "EmailExitsException";
  }
}

class UsernameExistsException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("El username ya existe", fileName, lineNumber);
    this.name = "UsernameExitsException";
  }
}

class UserNotExistException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("El usuario no está registrado", fileName, lineNumber);
    this.name = "UserNotExistException";
  }
}

// MARK: - Exception - Production

class InvalidProductionException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super(
      "La producción no puede ser null o no es un objeto Production.",
      fileName,
      lineNumber,
    );
    this.name = "InvalidProductionException";
  }
}

class ProductionExistsException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("La producción ya existe", fileName, lineNumber);
    this.name = "ProductionExistsException";
  }
}

class ProductionNotExistException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("La producción no está registrada", fileName, lineNumber);
    this.name = "ProductionNotExistException";
  }
}

// MARK: - Exception - Actor

class InvalidActorException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super(
      "El actor no puede ser null o no es un objeto Person.",
      fileName,
      lineNumber,
    );
    this.name = "InvalidActorException";
  }
}

class ActorExistsException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("El actor ya existe", fileName, lineNumber);
    this.name = "ActorExistsException";
  }
}

class ActorsNotExistException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("El actor no está registrado en el sistema", fileName, lineNumber);
    this.name = "ActorNotExistException";
  }
}

// MARK: - Exception - Director

class InvalidDirectorException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super(
      "El director no puede ser null o no es un objeto Person.",
      fileName,
      lineNumber,
    );
    this.name = "InvalidDirectorException";
  }
}

class DirectorExistsException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("El director ya existe", fileName, lineNumber);
    this.name = "DirectorExistsException";
  }
}

class DirectorNotExistException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("El director no está registrado en el sistema", fileName, lineNumber);
    this.name = "DirectorNotExistException";
  }
}

// MARK: - Exception - Null checks

class PersonNullException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("Person es null", fileName, lineNumber);
    this.name = "PersonNullException";
  }
}

class CategoryNullException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("Category es null", fileName, lineNumber);
    this.name = "CategoryNullException";
  }
}

class ProductionNullException extends VideoSystemException {
  constructor(fileName, lineNumber) {
    super("Production es null", fileName, lineNumber);
    this.name = "ProductionNullException";
  }
}

// MARK: - - Start SINGLETON -

// SINGLETON: - Instancia de un objeto de tipo pero solamente una vez y se puede reutilizar en varias partes del código.
let VideoSystemManager = (function () {
  // CLOUSURE : - Nadie desde fuera puede tocar la constante 'instance'
  let instance; // Instancia privada y única.
    /* 
        La información que debe mantener es:
            - Nombre del sistema.
            - Los usuarios que tienen acceso al sistema.
            - Listado de producciones que tenemos en el sistema.
            - Las categorías de las producciones.
            - Actores y actrices que tenemos registrados.
            - Directores que tenemos en el sistema.
    */
  class VideoSystemManager {
    #nameSystem;

    #users = new Map();
    #productions = new Map();

    #categories = new Map();
    #actors = new Map();
    #directors = new Map();

    #defaultCategory;
    #defaultUser;

    constructor() {
      if (!new.target) throw new InvalidAccessConstructorException();

      Object.defineProperties(this, "name", {
        enumerable: true,
        get() {
          return this.#nameSystem;
        },
        set(value) {
          if (!value) throw new EmptyValueException("name");
          if (typeof value !== "string")
            throw new InvalidValueException("name", value);
          this.#nameSystem.value;
        },
      });

      Object.defineProperties(this, "categories", {
        enumerable: true,
        get() {
          const values = this.#categories.values();
          return {
            *[Symbol.iterator]() {
              for (const storedCategory of values) {
                yield storedCategory.category;
              }
            },
          };
        },
      });
    }

    ///////// MAP////////////
    /* 
        clave -> objeto
        valor -> { entidad, relacion }
    */

    // MARK: - Category

    getCategories() {
      return this.#categories.values();
    }

    addCategory(...categories) {
      for (const category of categories) {
        if (!category || !(category instanceof Category))
          throw new InvalidCategoryException();
        if (this.#categories.has(category.name))
          throw new CategoryExistsException(category);

        this.#categories.set(category.name, {
          category,
          productions: new Map(),
        });
      }
      return this.#categories.size; // retorna num elementos
    }

    // Elimina una categoría.
    // Al eliminar la categoría, sus productos pasan a la de por defecto.
    removeCategory(...categories) {
      for (const category of categories) {
        if (!category || !(category instanceof Category))
          throw new InvalidCategoryException();
        if (!this.#categories.has(category.name))
          throw new CategoryNotExistException(category);
        const removedCategory = this.#categories.get(category.name);
        const defaultCategory = this.#categories.get(
          this.#defaultCategory.name,
        );

        for (const [key, production] of removedCategory.productions.entries()) {
          defaultCategory.productions.set(key, production);
        }

        this.#categories.delete(category.name);
      }
      return this.#categories.size; // Retorna num elementos
    }

    // MARK: - Users

    getUsers() {
      return this.#users.values();
    }

    addUser(...users) {
      for (const user of users) {
        if (!user || !(user instanceof User)) throw new InvalidUserException();
        if (this.#users.has(user.email)) throw new EmailExistsException();
        if (this.#users.has(user.username)) throw new UsernameExistsException();

        this.#users.set(user.username, {
          user,
          productions: new Map(),
        });
        return this.#users.size; // Retorna num elemntos
      }
    }

    removeUser(...users) {
      for (const user of users) {
        if (!user || !(user instanceof User)) throw new InvalidUserException();
        if (this.#users.has(user.username)) {
          this.#users.delete(user.username); // Existe? Elimina
        } else {
          throw new UserNotExistException(user); // lanza exc
        }
      }
      return this.#users.size;
    }

    // MARK: - Productions

    getProductions() {
      return this.#productions.values();
    }

    addProduction(...productions) {
      for (const prod of productions) {
        if (!prod || !(prod instanceof Production))
          throw new InvalidProductionException();
        if (!this.#productions.has(prod.title)) {
          this.#productions.set(prod.title, {
            prod,
            productions: new Map(),
          });
        } else {
          throw new ProductionExistsException();
        }
      }
      return this.#productions.size; // retorn num elem
    }

    removeProduction(...productions) {
      for (const prod of productions) {
        if (!prod || !(prod instanceof Production))
          throw new InvalidProductionException();
        if (this.#productions.has(prod.title)) {
          this.#productions.delete(prod);
        } else {
          throw new ProductionNotExistException();
        }
      }
      return this.#productions.size; // retorn num elemts
    }

    // MARK: - Actors
    getActors() {
      return this.#actors.values();
    }

    addActor(...actors) {
      for (const actor of actors) {
        if (!actor || !(actor instanceof Person))
          throw new InvalidActorException();
        if (!this.#actors.has(actor.name)) {
          this.#actors.set(actor.name, {
            actor,
            productions: new Map(),
          });
        } else {
          throw new ActorExistsException();
        }
      }
      return this.#actors.size;
    }

    removeActor(...actors) {
      for (const actor of actors) {
        if (!actor || !(actor instanceof Person))
          throw new InvalidActorException();
        if (this.#actors.has(actor.name)) {
          this.#actors.delete(actor);
        } else {
          throw new ActorExistsException();
        }
      }
      return this.#actors.size;
    }

    // MARK: - Director
    getDirectors() {
      return this.#directors.values();
    }

    addDirector(...directors) {
      for (const director of directors) {
        if (!director || !(director instanceof Person))
          throw new InvalidDirectorException();
        if (!this.#directors.has(director.name)) {
          this.#directors.set(director.name, {
            director,
            productions: new Map(),
          });
        } else {
          throw new DirectorExistsException();
        }
      }
      return this.#directors.size;
    }

    removeDirector(...directors) {
      for (const director of directors) {
        if (!director || !(director instanceof Person))
          throw new InvalidDirectorException();
        if (this.#directors.has(director.name)) {
          this.#directors.delete(director);
        } else {
          throw new DirectorNotExistException();
        }
      }
      return this.#directors.size;
    }

    // MARK: - Assign Category
    /// Asigna uno o más producciones a una categoría.
    /// Si el objeto Category o Production no existen -> añadir al sistema
    assignCategory(category, ...productions) {
      // convertir varios elementos en un array
      if (!category) throw new CategoryNullException();
      if (!productions.length) throw ProductionNullException;

      if (!this.#categories.has(category.name)) {
        this.addCategory(category); // no existe category? -> crea
      }

      const categoryData = this.#categories.get(category.name);

      for (const production of productions) {
        if (!this.#productions.has(production.title)) {
          this.addProduction(production); // no exite? -> crea
        }
        categoryData.productions.set(production.title, production); // asignar produccion a la categoria
      }
      return categoryData.productions.size; // num total de producciones asignadas a la categoría
    }

    // MARK: - Deassign Category
    /// Desasigna una o más producciones de una categoría
    deassignCategory(category, ...productions) {
      if (!category || !(category instanceof Category))
        throw new CategoryNullException();
      if (!productions.length) throw new ProductionNullException();

      const storedCategory = this.#categories.get(category.name);

      for (const prod of productions) {
        if (storedCategory.productions.has(prod.title)) {
          storedCategory.productions.delete(prod.title);
        }
      }
      return storedCategory.productions.size; // return num elem
    }

    // MARK: - Assign Director
    /// Asigna uno o más producciones a un director
    /// Si el director o el objeto Production no existen -> añadir al sistema
    assignDirector(director, ...productions) {
      if (!director) throw new PersonNullException();
      if (!productions.length) throw ProductionNullException;

      if (!this.#directors.has(director.name)) {
        this.addDirector(director); // no existe? -> crea
      }

      const directorData = this.#directors.get(director.name);

      for (const production of productions) {
        if (!this.#productions.has(production.title)) {
          this.addProduction(production); // no exite? -> crea
        }
        directorData.productions.set(production.title, production); // asignar produccion al director
      }
      return directorData.productions.size; // num total de producciones asignadas al director
    }

    // MARK: - Deassign Director
    /// Desasigna una o más producciones de un director
    deassignDirector(director, ...productions) {
      if (!director) throw new PersonNullException();
      if (!productions.length) throw new ProductionNullException();

      const directorData = this.#directors.get(director.name);

      for (const prod of productions) {
        directorData.productions.delete(prod);
      }
      return directorData.productions.size; // num total de producciones asignadas al director
    }

    // MARK: - Assign Actor
    /// Asigna uno o más producciones a un actor
    /// Si el director o el objeto Production no existen -> añadir al sistema
    assignActor(actor, ...productions) {
      if (!actor) throw new PersonNullException();
      if (!productions.length) throw ProductionNullException();

      if (!this.#actors.has(actor.name)) {
        this.addActor(actor); // no existe? -> crea
      }

      const actorData = this.#actors.get(actor.name);

      for (const production of productions) {
        if (!this.#productions.has(production.title)) {
          this.addProduction(production); // no exite? -> crea
        }
        actorData.productions.set(production.title, production); // asignar produccion al actor
      }
      return actorData.productions.size; // num total de producciones asignadas al actor
    }

    // MARK: - Deassign Actor
    /// Desasigna una o más producciones de un actor
    deassignActor(actor, ...productions) {
      if (!actor) throw new PersonNullException();
      if (!productions.length) throw new ProductionNullException();

      const actorData = this.#actors.get(actor.name);

      for (const prod of productions) {
        actorData.productions.delete(prod);
      }
      return actorData.productions.size; // num total de producciones asignadas al director
    }

    // MARK: - Cast
    // Obtiene un iterador con la relación de los actores del reparto, una producción y sus personajes
    /// * --> devuelve un iterador
    *getCast(production) {
      if (!production) throw new ProductionNullException();

      const cast = [];

      for (const actorData of this.#actors.values()) {
        if (actorData.productions.has(production)) {
          yield {
            // retorna iterador
            actor: actorData.actor,
            role: actorData.productions.get(production),
          };
        }
      }
    }

    // MARK: - Productions Director
    // Obtiene un iterador con las producciones de un director
    *getProductionsDirector(director) {
      if (!director) throw new PersonNullException();

      const directorData = this.#directors.get(director.name);

      for (const prod of directorData.productions.keys()) {
        yield prod;
      }
    }

    // MARK: - Productions Actor
    // Obtiene un iterador con las producciones de un actor y su papel de producción
    // ROLE = papel
    *getProductionsActor(actor) {
      if (!actor) throw new PersonNullException();

      const actorData = this.#actors.get(actor.name);

      for (const [prod, role] of actorData.productions.entries()) {
        yield { prod, role }; // retorna produccion y papel
      }
    }

    // MARK: - Productions Actor
    // Obtiene un iterador con las producciones de una categoria determinada
    *getProductionsCategory(category) {
      if (!category) throw new CategoryNullException();

      const categoryData = this.#categories.get(category.name);

      for (const prod of category.productions.keys()) {
        yield prod; // retorna produccion de la categoria
      }
    }

    // MARK: - Create person
    // Devuelve un objeto Person si está registrado, o crea un nuevo.
    // Si es nuevo NO lo añade al del manager.
    createPerson(name, lastname1, lastname2, born, picture) {
      const personTemp = new Person(name, lastname1, lastname2, born, picture);

      if (this.#actors.has(personTemp.name)) {
        return this.#actors.get(personTemp.name).actor;
      }

      if (this.#directors.has(personTemp.name)) {
        return this.#directors.get(personTemp.name).director;
      }

      return personTemp; // no existe -> devuelve pero no añade
    }

    // MARK: - Create production
    // Devuelve un objeto Production si está registrado, o crea un nuevo.
    // Si es nuevo NO lo añade al del manager.
    createProduction(title, nationality, publication, synopsis, image) {
      const prodTemp = new Production(
        title,
        nationality,
        publication,
        synopsis,
        image,
      );

      if (this.#productions.has(prodTemp.title)) {
        return this.#productions.get(prodTemp.title).production;
      }

      return prodTemp; // no existe -> devuelve pero no añade
    }

    // MARK: - Create user
    // Devuelve un objeto User si está registrado, o crea un nuevo.
    // Si es nuevo NO lo añade al del manager.
    createUser(username, email, password) {
      const userTemp = new User(username, email, password);

      if (this.#users.has(userTemp.username)) {
        return this.#users.get(userTemp.username).user;
      }

      return userTemp; // no existe -> devuelve pero no añade
    }

    // MARK: - Create category
    // Devuelve un objeto Category si está registrado, o crea un nuevo.
    // Si es nuevo NO lo añade al del manager.
    createCategory(name, description) {
      const cateTemp = new Category(name, description);

      if (this.#categories.has(cateTemp.name)) {
        return this.#categories.get(cateTemp.name).category;
      }

      return cateTemp; // no existe -> devuelve pero no añade
    }

    // MARK: - Find Productions
    // Obtiene un iterador que cumpla un criterio concreato en base a una función callback.
    // El iterador puede estar ordenado en base a la segunda función.
    *findProductions(type, field) {
      const array = [...this.#productions.values()].filter(
        (prod) => prod instanceof type,
      );

      for (const prod of array) {
        yield prod;
      }
    }

    // MARK: - Filter Productions in Category
    // Obtiene un iterador con la relación de los vehículos en una categoría, que cumplan los criterios de la función.
    // El iterador puede estar ordenado en base a una función de ordenación.

    *filterProductionsInCategory(category, filter, sort) {
      if (!category) throw new CategoryNullException();

      // obtener producciones de la categoria
      const categoryData = this.#categories.get(category.name);

      let array = [...categoryData.productions.values()];

      for (const cate of array) {
        yield cate;
      }
    }
  }

  function init() {
    const manager = new VideoSystemManager();
    Object.freeze(manager);
    return manager;
  }

  // MARK: - - End SINGLETON -
  // Fin inicialización del Singleton
  
  return {
    // Devuelve un objeto con getInstance
    getInstance: function () {
      // Variable instance 'undefined' -> primera ejecución -> inicia init()
      if (!instance) {
        instance = init();
      }
      return instance; // Ya asignado -> devuelve asignación
    },
  };
})();
