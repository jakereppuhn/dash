import React from "react";

const FormSignup = () => {
  return (
    <div className="signup-content-right">
      <from className="form">
        <h1 className="sign-up-h1">
          Get started with Dash today! Create your account by filling out the
          information below!{" "}
        </h1>
        <div className="signup-inputs">
          <label htmlFor="username" className="signup-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="signup-input"
            placeholder="Enter your username"
          ></input>
        </div>
        <div className="signup-inputs">
          <label htmlFor="email" className="signup-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="signup-input"
            placeholder="Enter your email"
          ></input>
        </div>
        <div className="signup-inputs">
          <label htmlFor="password" className="signup-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="signup-input"
            placeholder="Enter your password"
          ></input>
        </div>
        <div className="signup-inputs">
          <label htmlFor="password2" className="signup-label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password2"
            name="password2"
            className="signup-input"
            placeholder="Confrim your password"
          ></input>
        </div>
      </from>
    </div>
  );
};

export default FormSignup;
