import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../item-details";
import ApiService from "../../Services/api-service";

const ElementView = () => {
  const apiService = new ApiService();

  const { id } = useParams();
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    apiService.getPlanet(id).then(setPlanet);
  }, [id]);

  return (
    <div>
      <ItemDetails
        imgUrl={apiService.getPlanetImg(id)}
        itemData={planet}
        renderDetailsDisplayName={({ name }) => name}
      />
    </div>
  );
};

export default ElementView;
