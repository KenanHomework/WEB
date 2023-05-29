import React from "react";
import ApiService from "../../Services/api-service";
import ListAndDetails from "../list-and-details";

const PlanetPage = () => {
  const apiService = new ApiService();

  return (
    <ListAndDetails
      renderItem={({ name }) => `${name} `}
      getData={apiService.getAllPlanets}
      getSelectedItem={apiService.getPlanet}
      getImg={apiService.getPlanetImg}
      renderDetailsDisplayName={({ name }) => name}
    />
  );
};

export default PlanetPage;
