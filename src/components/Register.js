import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/registration.css";

import register from "../images/Registration.jpg";
import Nav from "./Nav";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Register1 from "./Register1";
import Register2 from "./Register2";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [error, setError] = useState({});
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

  const disabledSubmit = () => {
    return newUser.email === "" || newUser.password === "" ? "disabled" : "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setNewUser({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      });
      navigate("/login");
    }
  };

  const validate = () => {
    let errors = {};

    if (step === 1) {
      errors = validateStep1();
    } else if (step === 2) {
      errors = validateStep2();
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep1 = () => {
    let step1Errors = {};

    if (!newUser.first_name.trim()) {
      step1Errors.first_name = "First name is required.";
    }

    return step1Errors;
  };

  const validateStep2 = () => {
    let step2Errors = {};

    if (!newUser.email.trim()) {
      step2Errors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newUser.email)
    ) {
      step2Errors.email = "Invalid email format.";
    }

    if (!newUser.password.trim()) {
      step2Errors.password = "Password is required.";
    } else if (!isStrongPassword(newUser.password)) {
      step2Errors.password = "Password should be strong and meet all criteria.";
    }

    return step2Errors;
  };

  const isStrongPassword = (password) => {
    // At least 8 characters long, 1 uppercase, 1 lowercase, 1 digit, 1 special char
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(
      password
    );
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
                  error={error}
                />
              )}
              {step === 2 && (
                <Register2
                  newUser={newUser}
                  step={step}
                  setNewUser={setNewUser}
                  disabledButton={disabledSubmit}
                  error={error}
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
