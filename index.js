import Person from './Objects/Person.js';
import Category from './Objects/Category.js';
import Resource from './Objects/Resource.js';
import Coordinate from './Objects/Coordinate.js';
import Movie from './Objects/Movie.js';
import Serie from './Objects/Serie.js';
import User from './Objects/User.js';

function testEntities() {
  console.log("===== OBJETOS: =====");

  console.log("===== PERSON =====");
  const person = new Person("Esther", "H", "P", new Date(1999, 1, 10));
  console.log(person.toString());

  console.log("===== CATEGORY =====");
  const drama = new Category("Drama");
  console.log(drama.toString());

  console.log("===== RESOURCE =====");
  const resource = new Resource(120, "/movies/matrix.mp4");
  console.log(resource.toString());

  console.log("===== COORDINATE =====");
  const coord = new Coordinate(40.4168, -3.7038);
  console.log(coord.toString());

  console.log("===== MOVIE =====");
  const movie = new Movie(
    "Matrix",
    "USA",
    new Date(1999, 2, 31)
  );
  console.log(movie.toString());

  console.log("===== SERIE =====");
  const serie = new Serie(
    "Breaking Bad",
    "USA",
    new Date(2008, 0, 20)
  );
  console.log(serie.toString());

  console.log("===== USER =====");
  const user = new User("admin", "admin@mail.com", "1234");
  console.log(user.toString());
}

window.onload = testEntities;