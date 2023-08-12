import React from "react";
import { Link } from "react-router-dom";

const Register2 = ({ newUser, step, setNewUser, disabledButton, error }) => {
  return (
    <>
      <h2>Welcome to the Tribe {newUser.first_name}! You are almost ready.</h2>
      <div className="form-field">
        <input
          id="email"
          value={newUser?.email}
          onChange={(e) =>
            setNewUser((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          type="text"
        />
        <label htmlFor="email" style={{ color: newUser?.email ? "white" : "" }}>
          Email address
        </label>
        {error.email && <span className="error-text">{error.email}</span>}
      </div>
      <div className="form-field">
        <input
          id="password"
          value={newUser?.password}
          onChange={(e) =>
            setNewUser((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          type="password"
        />
        <label
          htmlFor="password"
          style={{ color: newUser?.password ? "white" : "" }}
        >
          Password
        </label>
        {error.password && <span className="error-text">{error.password}</span>}
      </div>
      <div className="button-container">
        <div className="progress-container">
          <div className="step"></div>
          <div className={`step ${step === 2 ? "active-step" : ""}`}></div>
        </div>
        <button
          disabled={disabledButton() === "disabled"}
          className={`btn-secondary ${disabledButton()}`}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Register2;
