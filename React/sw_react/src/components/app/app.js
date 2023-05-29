import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import ApiService from "../../Services/api-service";
import StarshipPage from "../starship-page";
import PlanetPage from "../planet-page";
import PeoplePage from "../people-page";

const App = () => {
  const apiService = new ApiService();

  return (
    <div className="container">
      <Header />
      <RandomPlanet />
      <StarshipPage />
      <PlanetPage />
      <PeoplePage />
    </div>
  );
};
export default App;
