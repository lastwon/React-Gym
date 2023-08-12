import React from "react";
import { Link } from "react-router-dom";

const Register1 = ({ newUser, step, setNewUser, disabledButton, error }) => {
  return (
    <>
      <h2>Hi there, what's your name?</h2>
      <div className="form-field">
        <input
          id="firstName"
          value={newUser?.first_name}
          onChange={(e) =>
            setNewUser((prev) => ({
              ...prev,
              first_name: e.target.value,
            }))
          }
          type="text"
        />
        <label
          htmlFor="firstName"
          style={{ color: newUser?.first_name ? "white" : "" }}
        >
          First name
        </label>
        {error.first_name && (
          <span className="error-text">{error.first_name}</span>
        )}
      </div>
      <div className="form-field">
        <input
          id="lastName"
          value={newUser?.last_name}
          onChange={(e) =>
            setNewUser((prev) => ({
              ...prev,
              last_name: e.target.value,
            }))
          }
          type="text"
        />
        <label
          htmlFor="lastName"
          style={{ color: newUser?.last_name ? "white" : "" }}
        >
          Last name
        </label>
        {error.last_name && (
          <span className="error-text">{error.last_name}</span>
        )}
      </div>

      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
      <div className="button-container">
        <div className="progress-container">
          <div className={`step ${step === 1 ? "active-step" : ""}`}></div>
          <div className="step"></div>
        </div>
        <button
          disabled={disabledButton() === "disabled"}
          className={`btn-secondary ${disabledButton()}`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Register1;
