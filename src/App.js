import React from "react";

import "./styles/index.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Cards />
    </>
  );
};

export default App;
