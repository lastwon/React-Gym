import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/index.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import MainInfo from "./components/MainInfo";
import Carousel from "./components/Carousel";
import BuyWorkouts from "./components/BuyWorkouts";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Hero />
              <Cards />
              <MainInfo />
              <Carousel />
              <BuyWorkouts />
              <Footer />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
