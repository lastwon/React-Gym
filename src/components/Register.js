import React, { useEffect, useState } from "react";

import "../styles/registration.css";

import register from "../images/Registration.jpg";
import Nav from "./Nav";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Register1 from "./Register1";
import Register2 from "./Register2";

const Register = () => {
  const [step, setStep] = useState(1);
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const disabledButton = () => {
    return newUser.first_name === "" || newUser.last_name === ""
      ? "disabled"
      : "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // something
    }
  };

  const whichStep = () => {
    if (step === 1)
      return (
        <Link className="arrow" to={"/"}>
          <svg width="21" height="16" viewBox="0 0 21 16" fill="none">
            <path
              d="M21 7H3.82667L9.41333 1.41333L8 0L0 8L8 16L9.41333 14.5867L3.82667 9H21V7Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      );
    else
      return (
        <div className="arrow" onClick={() => setStep(1)}>
          <svg width="21" height="16" viewBox="0 0 21 16" fill="none">
            <path
              d="M21 7H3.82667L9.41333 1.41333L8 0L0 8L8 16L9.41333 14.5867L3.82667 9H21V7Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      );
  };

  return (
    <>
      <Nav />
      <div className="registration">
        <div className="registration-image">
          <Logo />
        </div>
        <div className="registration-container">
          {whichStep()}
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <Register1
                  newUser={newUser}
                  step={step}
                  setNewUser={setNewUser}
                  disabledButton={disabledButton}
                />
              )}
              {step === 2 && (
                <Register2
                  newUser={newUser}
                  step={step}
                  setNewUser={setNewUser}
                  disabledButton={disabledButton}
                />
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
