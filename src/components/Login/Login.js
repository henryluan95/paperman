import "./Login.scss";

import React from "react";

const Login = () => {
  return (
    <div className="login">
      <ul className="login__items">
        <form className="sign-in">
          <h4 className="sign-in__title" data-text="Sign In">
            Sign In
          </h4>
          <label>
            Username:
            <input placeholder="Enter Username" />
          </label>
          <label>
            Password:
            <input placeholder="Enter Password" />
          </label>
        </form>
        <h4 className="sign-up" data-text="Sign Up">
          Sign Up
        </h4>
      </ul>
    </div>
  );
};

export default Login;
