import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import ApiService from "../../Services/api-service";
import ListAndDetails from "../list-and-details";

const App = () => {
  const apiService = new ApiService();

  return (
    <div className="container">
      <Header />
      <RandomPlanet />
      <ListAndDetails
        renderItem={({ name }) => `${name} `}
        getData={apiService.getPeople}
        getSelectedItem={apiService.getPerson}
        getImg={apiService.getPersonImg}
        renderDetailsDisplayName={({ name }) => name}
      />
    </div>
  );
};
export default App;
