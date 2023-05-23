import React, { useEffect, useState } from "react";
import ApiService from "../../Services/api-service";
import "./random-planet.css";
import { Alert, AlertTitle } from "@mui/material";
import PlanetView from "../planet-view";
import Spinner from "../spinner";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function RandomPlanet() {
  const apiService = new ApiService();

  const [planet, setPlanet] = useState({
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [animationParent] = useAutoAnimate();

  const onPlanetLoaded = (planet) => {
    setPlanet(planet);
    setLoading(false);
    setError(false);
  };

  const updatePlanet = async () => {
    let id = Math.floor(Math.random() * 17 + 2);

    apiService
      .getPlanet(id)
      .then(onPlanetLoaded)
      .catch(() => {
        setError(true);
      });
  };

  useEffect(() => {
    const interval = setInterval(updatePlanet, 2000);
    return () => clearInterval(interval);
  }, []);

  const content = error ? (
    <Alert severity="error" variant="standard">
      <AlertTitle>Error</AlertTitle>
      An error has occurred. Please be assured that our teams are working to fix
      the problem. Thank you for understanding!
    </Alert>
  ) : loading ? (
    <Spinner />
  ) : (
    <PlanetView planet={planet} />
  );

  return (
    <div className="random-planet bg-dark rounded" ref={animationParent}>
      {content}
    </div>
  );
}

export default RandomPlanet;
