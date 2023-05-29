import React, { Fragment } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <RandomPlanet />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
