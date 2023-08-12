import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Footer from "./Footer";
import Nav from "./Nav";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const disabledButton = () => {
    return userInfo.email === "" || userInfo.password === "" ? "disabled" : "";
  };

  const validate = () => {
    let errors = {};

    // Validate email
    if (!userInfo.email.trim()) {
      errors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userInfo.email)
    ) {
      errors.email = "Invalid email format.";
    }

    // Validate password
    if (!userInfo.password.trim()) {
      errors.password = "Password is required.";
    } else if (!isStrongPassword(userInfo.password)) {
      errors.password = "Password should be strong and meet all criteria.";
    }

    return errors;
  };

  const isStrongPassword = (password) => {
    // At least 8 characters long, 1 uppercase, 1 lowercase, 1 digit, 1 special char
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(
      password
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      console.log("Great logged in!!");
      console.log(userInfo);
      setError({});
      setUserInfo({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <Nav />
      <div className="registration">
        <div className="registration-image">
          <Logo />
        </div>
        <div className="registration-container">
          <Link className="arrow" to={"/"}>
            <svg width="21" height="16" viewBox="0 0 21 16" fill="none">
              <path
                d="M21 7H3.82667L9.41333 1.41333L8 0L0 8L8 16L9.41333 14.5867L3.82667 9H21V7Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
          <div className="form-container">
            <form onSubmit={handleLogin}>
              <h2>You're back, awesome!</h2>
              <div className="form-field">
                <input
                  id="email"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  type="text"
                />
                <label
                  htmlFor="email"
                  style={{ color: userInfo.email ? "white" : "" }}
                >
                  Email Address
                </label>
                {error.email && (
                  <span className="error-text">{error.email}</span>
                )}
              </div>
              <div className="form-field">
                <input
                  id="password"
                  value={userInfo.password}
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  type="password"
                />
                <label
                  htmlFor="password"
                  style={{ color: userInfo.password ? "white" : "" }}
                >
                  Password
                </label>
                {error.password && (
                  <span className="error-text">{error.password}</span>
                )}
              </div>

              <p>
                New here? <Link to="/register">Sign Up</Link>
              </p>
              <div className="button-container">
                <button
                  disabled={disabledButton() === "disabled"}
                  className={`btn-secondary ${disabledButton()}`}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
