import React from "react";
import ListAndDetails from "../list-and-details";

const PeoplePage = () => {
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
