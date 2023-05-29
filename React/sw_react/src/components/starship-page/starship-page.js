import React from "react";
import ApiService from "../../Services/api-service";
import ListAndDetails from "../list-and-details";

const StarshipPage = () => {
  const apiService = new ApiService();

  return (
    <ListAndDetails
      renderItem={({ name }) => `${name} `}
      getData={apiService.getAllStarships}
      getSelectedItem={apiService.getStarship}
      getImg={apiService.getStarshipImg}
      renderDetailsDisplayName={({ name }) => name}
    />
  );
};

export default StarshipPage;
