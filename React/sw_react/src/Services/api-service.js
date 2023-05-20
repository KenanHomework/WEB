class ApiService {
  _apiBaseUrl = "https://swapi.dev/api";

  async getResources(url) {
    const response = await fetch(`${this._apiBaseUrl}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url},received ${response.status}`);
    }

    return await response.json();
  }

  async getPeople() {
    const response = await this.getResources(`/people/`);
    return response.results;
  }

  async getPeopleTransformed() {
    const response = await this.getResources(`/people/`);
    return response.results.map((person) => this._transformPerson(person));
  }

  async getPerson(id) {
    const person = await this.getResources(`/people/${id}`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const response = await this.getResources(`/planets/`);
    return response.results;
  }

  async getAllTransformedPlanets() {
    const response = await this.getResources(`/planets/`);
    return response.results.map((planet) => this._transformPlanet(planet));
  }

  async getPlanet(id) {
    const planet = await this.getResources(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const response = await this.getResources(`/starships/`);
    return response.results;
  }

  async getAllTransformedStarships() {
    const response = await this.getResources(`/starships/`);
    return response.results.map((starShip) =>
      this._transformStarship(starShip)
    );
  }

  getStarship(id) {
    const starship = this.getResources(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet.url),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,

      diameter: planet.diameter,
    };
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person.url),
      name: person.name,
      birthYear: person.birth_year,
      homeWorldId: this._extractId(person.homeworld),
      gender: person.gender,
      eyeColor: person.eye_color,
    };
  }

  _transformStarship(starship) {
    return {
      id: this._extractId(starship.url),
      name: starship.name,
      model: starship.model,
      starshipClass: starship.starship_class,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cost: starship.cost_in_credits,
    };
  }

  _extractId(url) {
    const idRegexExp = /\/([0-9]*)\/$/;
    return url.match(idRegexExp)[1];
  }
}

export default ApiService;
