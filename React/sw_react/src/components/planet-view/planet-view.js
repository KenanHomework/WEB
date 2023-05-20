import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const PlanetView = ({ planet }) => {
  const [animationParent] = useAutoAnimate();

  return (
    <>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`}
      />
      <div>
        <h4>{planet.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{planet.population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{planet.rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{planet.diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PlanetView;
