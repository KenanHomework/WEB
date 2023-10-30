class TodoApi {
  _apiBaseUrl = "https://localhost:7255/api";

  async getResources(url) {
    const response = await fetch(`${this._apiBaseUrl}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url},received ${response.status}`);
    }

    return await response.json();
  }

  getToDos = async (searchQuery, filter) => {
    let query = "?";
    if (searchQuery) query += `searchQuery=${searchQuery}&`;
    if (filter) query += `filter=${filter}`;
    const response = await this.getResources(`/${query}`);
    return response;
  };
}
