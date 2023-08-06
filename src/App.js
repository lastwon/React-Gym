import React from "react";

import "./styles/index.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import MainInfo from "./components/MainInfo";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Cards />
      <MainInfo />
      <Carousel />
    </>
  );
};

export default App;
