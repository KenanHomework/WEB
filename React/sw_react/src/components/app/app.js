import React, { useEffect, useState } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import "./app.css";
import ApiService from "../../Services/api-service";

const App = () => {
  const apiService = new ApiService();
  const [selectedPerson, setSelectedPerson] = useState(null);

  const onSelectionChange = (id) => {
    apiService.getPerson(id).then(setSelectedPerson);
  };

  useEffect(() => onSelectionChange(4), []);

  return (
    <div className="container">
      <Header />
      <RandomPlanet />
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onselectionchange={onSelectionChange}
            selectedId={selectedPerson == null ? -1 : selectedPerson.id}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails person={selectedPerson} />
        </div>
      </div>
    </div>
  );
};
export default App;
