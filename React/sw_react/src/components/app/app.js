import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./app.css";
import StarshipPage from "../starship-page";
import PlanetPage from "../planet-page";
import PeoplePage from "../people-page";
import Layout from "../layout";
import ElementView from "../element-view";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Link to={"/starships/2"}>2</Link> <br />
        <Link to={"/starships/3"}>3</Link> <br />
        <Link to={"/starships/4"}>4</Link> <br />
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path={"/"} element={<h1>Welcome to Star Wars</h1>} />
            <Route path={"/people"} element={<PeoplePage />} />
            <Route path={"/planets"} element={<PlanetPage />} />
            <Route path={"/starships"} element={<StarshipPage />} />
            <Route path={"/starships/:id"} element={<ElementView />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};
export default App;
