import React from "react";
import { Link } from "react-router-dom";

const Register1 = ({ newUser, step, setNewUser, disabledButton }) => {
  return (
    <>
      <h2>Hi there, what's your name?</h2>
      <div className="form-field">
        <label>First name</label>
        <input
          value={newUser?.first_name}
          onChange={(e) =>
            setNewUser((prev) => ({
              ...prev,
              first_name: e.target.value,
            }))
          }
          type="text"
        />
      </div>
      <div className="form-field">
        <label>Last name</label>
        <input
          value={newUser?.last_name}
          onChange={(e) =>
            setNewUser((prev) => ({
              ...prev,
              last_name: e.target.value,
            }))
          }
          type="text"
        />
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
