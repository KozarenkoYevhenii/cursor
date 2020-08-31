const BASE_URL = "https://swapi.dev/api/";

document.getElementById("getPersonages").addEventListener("click", () => {
  getPersonagesInfo().then(renderPersonagesInfo);
});

document.getElementById("getPlanets").addEventListener("click", () => {
  getPlanets((page = 1)).then(renderPlanets);
});

async function getPersonagesInfo() {
  const result = await axios(`${BASE_URL}films/2`);
  const characters = [];
  for (let i = 0; i < result.data.characters.length; i++) {
    let character = await axios(result.data.characters[i]);
    characters.push([
      character.data.name,
      character.data.birth_year,
      character.data.gender,
    ]);
  }
  return characters;
}

function renderPersonagesInfo(characters = []) {
  const container = document.getElementById("personages");
  container.innerHTML = "";

  characters.forEach((char) => {
    const character = document.createElement("div");
    character.className = "character";
    character.innerHTML = `
    <h2>${char[0]}<h2>
    <h4>Birth year: ${char[1]}<h4>
    <h4>Gender: ${char[1]}<h4>
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
