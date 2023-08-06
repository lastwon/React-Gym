import React from "react";

import "./styles/index.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import MainInfo from "./components/MainInfo";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Cards />
      <MainInfo />
    </>
  );
};

export default App;
