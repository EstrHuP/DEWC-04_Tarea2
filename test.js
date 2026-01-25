import Person from "./Entities/Person.js";
import Category from "./Entities/Category.js";
import Resource from "./Entities/Resource.js";
import Coordinate from "./Entities/Coordinate.js";
import Movie from "./Entities/Movie.js";
import Serie from "./Entities/Serie.js";
import User from "./Entities/User.js";
import Production from "./Entities/Production.js";
import VideoSystemManager from "./VideoSystemManager.js";

// MARK: - Category

function testCategory() {
  console.log("---Category----");
  const manager = VideoSystemManager.getInstance();

  const cate1 = new Category("Acción", "Peliculas de acción");
  const cate2 = new Category("Drama", "Peliculas dramáticas");

  // Add two categories
  try {
    manager.addCategory(cate1, cate2);
    console.log("Categorías añadidas correctamente"); // <- success
  } catch (error) {
    console.log(error.toString());
  }

  // Add a category
  try {
    manager.addCategory(cate1);
  } catch (error) {
    // Exception: category exists
    console.log(error.toString()); // <- error
  }

  // Remove category 2
  try {
    manager.removeCategory(cate2);
    console.log("Categoría eliminada"); // <- success
  } catch (error) {
    console.log(error.toString());
  }

  // Remove new category animation
  try {
    manager.removeCategory(new Category("Animación"));
  } catch (error) {
    console.log(error.toString());
  }
}

// MARK: - User

function testUser() {
  console.log("-----User-----");

  const manager = VideoSystemManager.getInstance();

  const user1 = new User("Pepe", "pepe@mail.com", "1234");
  const user2 = new User("Mae", "mae@mail.com", "1234");
  const uEmail = new User("a");
  const uName = new User("", "a@mail.com");

  // Add users
  try {
    manager.addUser(user1, user2);
    console.log("Usuarios añadidos"); // <- success
  } catch (error) {
    console.log(error.toString());
  }

  // Add user again
  try {
    manager.addUser(user2);
    console.log("Usuarios añadidos");
  } catch (error) {
    // Exception: user exists
    console.log(error.toString()); // <- error
  }

  // Add user without mail
  try {
    manager.addUser(uEmail);
  } catch (error) {
    // Exception: email null
    console.log(error.toString()); // <- error
  }

  // Add user without username
  try {
    manager.addUser(uName);
  } catch (error) {
    // Exception: username null
    console.log(error.toString()); // <- error
  }

  // Remove user
  try {
    manager.removeUser(user2);
    console.log("Usuario eliminado");
  } catch (e) {
    console.log(e.toString());
  }

  try {
    manager.removeUser(new User("fake", "fake@mail.com", "123"));
  } catch (e) {
    // Exception - user doesn't exist
    console.log(e.toString()); // <- error
  }
}

// MARK: - Production

function testProduction() {
  console.log("----Production-------");
  const manager = VideoSystemManager.getInstance();

  const prod1 = new Production("Matrix", "USA", 1999, "Ficción");
  const prod2 = new Production("Gladiator", "USA", 2000, "Batalla");

  try {
    manager.addProduction(prod1, prod2);
    console.log("Producciones añadidas");
  } catch (e) {
    console.log(e.toString());
  }

  // Add an exist prod
  try {
    manager.addProduction(prod1);
  } catch (e) {
    // ProductionExistsException
    console.log(e.toString()); // <- error
  }

  // REmove
  try {
    manager.removeProduction(prod2);
    console.log("Producción eliminada");
  } catch (e) {
    console.log(e.toString());
  }

  // Remove production doesn't exist
  try {
    manager.removeProduction(new Production("Fake"));
  } catch (e) {
    // ProductionNotExistException
    console.log(e.toString()); // <- error
  }
}

// MARK: - Actor

function testActor() {
  console.log("-------Actors-------");
  const manager = VideoSystemManager.getInstance();

  const act1 = new Person("Esther", "Actor1", "Actor2");
  const act2Error = new Production("Gladiator", "USA", 2000, "Batalla"); // <- objeto diferente
  const act2 = new Person("esq", "Es", "AS");

  try {
    manager.addActor(act1, act2);
    console.log("Actores añadidos");
  } catch (e) {
    console.log(e.toString());
  }

  try {
    manager.addActor(act2Error);
  } catch (e) {
    // Exception: no es tipo Person
    console.log(e.toString()); // <- error
  }

  try {
    manager.addActor(act1);
  } catch (e) {
    // Exception: ya existe
    console.log(e.toString()); // <- error
  }

  // Remove
  try {
    manager.removeActor(act2);
    console.log("Actor eliminada");
  } catch (e) {
    console.log(e.toString());
  }

  // Remove actor not exists
  try {
    manager.removeActor(new Person("FakeActor"));
  } catch (e) {
    console.log(e.toString()); // <- error
  }
}

// MARK: - Director

function testDirector() {
  console.log("-------Directors------");
  const manager = VideoSystemManager.getInstance();

  const dir1 = new Person("Esther", "Directora1", "Directora12");
  const dir2Error = new Production("Gladiator", "USA", 2000, "Batalla"); // <- objeto diferente
  const dir2 = new Person("Director2", "Es", "AS");

  try {
    manager.addDirector(dir1, dir2);
    console.log("directores añadidos");
  } catch (e) {
    console.log(e.toString());
  }

  try {
    manager.addDirector(dir2Error);
  } catch (e) {
    // Exception: no es tipo Person
    console.log(e.toString()); // <- error
  }

  try {
    manager.addDirector(dir1);
  } catch (e) {
    // Exception: ya existe
    console.log(e.toString()); // <- error
  }

  // Remove
  try {
    manager.removeDirector(dir1);
    console.log("Director eliminado");
  } catch (e) {
    console.log(e.toString());
  }

  // Remove director not exists
  try {
    manager.removeDirector(new Person("FakeDirector"));
  } catch (e) {
    console.log(e.toString()); // <- error
  }
}

// Assign

function testAssign() {
  console.log("--------Assign---------");
  const manager = VideoSystemManager.getInstance();

  const category = new Category("Sci-Fi");
  const prod = new Production("Blade Runner", "USA", 1982, "Futuro");
  const actor = new Person("Harrison", "Ford");
  const director = new Person("Ridley", "Scott");

  try {
    manager.assignCategory(category, prod);
    console.log("Producción asignada a categoría");
  } catch (e) {
    console.log(e.toString());
  }

  try {
    manager.assignActor(actor, prod);
    console.log("Producción asignada a actor");
  } catch (e) {
    console.log(e.toString());
  }

  try {
    manager.assignDirector(director, prod);
    console.log("Producción asignada a director");
  } catch (e) {
    console.log(e.toString());
  }

  try {
    manager.deassignActor(actor, prod);
    console.log("Producción desasignada del actor");
  } catch (e) {
    console.log(e.toString());
  }
}

function testIterator() {
  console.log("--------Iterator----------");
  const manager = VideoSystemManager.getInstance();

  console.log("Producciones registradas:");
  for (const p of manager.getProductions()) {
    console.log(p.prod.title);
  }

  console.log("Actores registrados:");
  for (const a of manager.getActors()) {
    console.log(a.actor.name);
  }

  console.log("Directores registrados:");
  for (const d of manager.getDirectors()) {
    console.log(d.director.name);
  }
}

function testVideoSystem() {
  testCategory();
  testUser();
  testProduction();
  testActor();
  testDirector();
  testAssign();
  testIterator();
}

window.addEventListener("load", testVideoSystem);
