import React, { useEffect, useState } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import ApiService from "../../Services/api-service";
import ListAndDetails from "../list-and-details";

const App = () => {
  const apiService = new ApiService();
  const [selectedId, setSelectedId] = useState(4);
  const [selectedItem, setSelectedItem] = useState({});

  const onSelectionChange = (id) => {
    setSelectedId(id);
  };

  const updatePerson = () => {
    apiService.getPerson(selectedId).then((person) => setSelectedItem(person));
  };

  useEffect(updatePerson, [selectedId]);
  // useEffect(, []);
  // useEffect(onSelectionChange, [selectedPerson]);
  return (
    <div className="container">
      <Header />
      <RandomPlanet />
      <ListAndDetails
        renderItem={({ name }) => `${name} `}
        getData={apiService.getPeople}
        onSelectionChange={onSelectionChange}
        selectedId={selectedId == null ? -1 : selectedId}
        imgUrl={`https://starwars-visualguide.com/assets/img/characters/${selectedItem.id}.jpg`}
        displayName={selectedItem.name}
        itemData={selectedItem}
      />
    </div>
  );
};
export default App;
