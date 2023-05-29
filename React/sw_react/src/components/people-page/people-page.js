import React from "react";
import ListAndDetails from "../list-and-details";
import ApiService from "../../Services/api-service";

const PeoplePage = () => {
  const apiService = new ApiService();

  return (
    <ListAndDetails
      renderItem={({ name }) => `${name} `}
      getData={apiService.getPeople}
      getSelectedItem={apiService.getPerson}
      getImg={apiService.getPersonImg}
      renderDetailsDisplayName={({ name }) => name}
    />
  );
};

export default PeoplePage;
