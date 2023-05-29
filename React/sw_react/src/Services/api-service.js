class ApiService {
  _apiBaseUrl = "https://swapi.py4e.com/api";
  _apiImgBaseUrl = "https://starwars-visualguide.com/assets/img";

  async getResources(url) {
    const response = await fetch(`${this._apiBaseUrl}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url},received ${response.status}`);
    }

    return await response.json();
  }

  getPeople = async () => {
    const response = await this.getResources(`/people/`);
    return response.results.map((person) => this._transformPerson(person));
  };

  getPerson = async (id) => {
    const person = await this.getResources(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getPersonImg = (id) => {
    return `${this._apiImgBaseUrl}/characters/${id}.jpg`;
  };

  getAllPlanets = async () => {
    const response = await this.getResources(`/planets/`);
    return response.results.map((planet) => this._transformPlanet(planet));
  };

  getPlanet = async (id) => {
    const planet = await this.getResources(`/planets/${id}`);
    return this._transformPlanet(planet);
  };

  getPlanetImg = (id) => {
    return `${this._apiImgBaseUrl}/planets/${id}.jpg`;
  };

  getAllStarships = async () => {
    const response = await this.getResources(`/starships/`);
    return response.results.map((starShip) =>
      this._transformStarship(starShip)
    );
  };

  getStarship = async (id) => {
    const starship = await this.getResources(`/starships/${id}`);
    return this._transformStarship(starship);
  };

  getStarshipImg = (id) => {
    return `${this._apiImgBaseUrl}/starships/${id}.jpg`;
  };

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
