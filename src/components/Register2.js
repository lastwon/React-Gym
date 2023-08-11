import React from "react";
import { Link } from "react-router-dom";

const Register2 = ({ newUser, step, setNewUser, disabledButton }) => {
  return (
    <>
      <h2>Welcome to the Tribe qwe! You are almost ready.</h2>
      <div className="form-field">
        <label>Email address</label>
        <input
          value={newUser?.email}
          onChange={(e) =>
            setNewUser((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          type="text"
        />
      </div>
      <div className="form-field">
        <label>Password</label>
        <input
          value={newUser?.password}
          onChange={(e) =>
            setNewUser((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          type="password"
        />
      </div>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
      <div className="button-container">
        <div className="progress-container">
          <div className="step"></div>
          <div className={`step ${step === 2 ? "active-step" : ""}`}></div>
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

export default Register2;
