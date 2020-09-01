const BASE_URL = "https://swapi.dev/api/";
let filmNumber = 2;

document.getElementById("getPersonages").addEventListener("click", () => {
  getPersonagesInfo(filmNumber).then(renderPersonagesInfo);
});

document.getElementById("getPlanets").addEventListener("click", () => {
  getPlanets((page = 1)).then(renderPlanets);
});
document.getElementById("filmNumber").addEventListener("change", (event) => {
  filmNumber = event.target.value;
})

async function getPersonagesInfo(filmNumber) {
  const result = await axios(`${BASE_URL}films/${filmNumber}/`);
  const characters = [];
  for (let i = 0; i < result.data.characters.length; i++) {
    let character = await axios(
      result.data.characters[i].replace("http", "https")
    );
    characters.push([
      character.data.name,
      character.data.birth_year,
      character.data.gender,
    ]);
  }
  return characters;
}

function renderPersonagesInfo(characters = []) {
  const container = document.getElementById("characters");
  container.innerHTML = "";
  document.getElementById("planets").innerHTML = "";

  characters.forEach((char) => {
    const character = document.createElement("div");
    character.className = "character";
    character.innerHTML = `
    <h2>${char[0]}<h2>
    <h4>Birth year: ${char[1]}<h4>
    <h4>Gender: ${char[2]}<h4>
    --------------------------
    `;
    container.append(character);
  });
}

async function getPlanets(page) {
  let planets = await axios(`${BASE_URL}planets/?page=${page}`);
  planetsList = [];
  for (planet of planets.data.results) {
    planetsList.push(planet.name);
  }
  return planetsList;
}

function renderPlanets(planets = []) {
  const container = document.getElementById("planets");
  container.innerHTML = "";
  document.getElementById("characters").innerHTML = "";

  planets.forEach((pl) => {
    const planet = document.createElement("div");
    planet.className = "planet";
    planet.innerHTML = pl;
    container.append(planet);
  });
}

function paginationPlanets() {
  let currentPage = 1;
  document.getElementById("prev").addEventListener("click", () => {
    if (currentPage <= 1) return;
    getPlanets(--currentPage).then(renderPlanets);
  });
  document.getElementById("next").addEventListener("click", () => {
    if (currentPage > 5) return;
    getPlanets(++currentPage).then(renderPlanets);
  });
}

paginationPlanets();
