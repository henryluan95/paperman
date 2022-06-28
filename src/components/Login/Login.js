import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Login.scss";

const Login = ({ isLoginClicked }) => {
  //Check if we are on sign in page
  const [isSignIn, setIsSignIn] = useState(true);
  const [user, setUser] = useState(null);

  const handleSignIn = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, username, password)
      .then((cred) => {
        setUser(cred.user);
      })
      .catch((err) => console.log(err.message));
  };

  //create a signed in element
  const singedInElement = <h1>Hello {user?.email}</h1>;

  //create a sign in element
  const signInElement = isSignIn ? (
    <>
      <form className="sign-in" onSubmit={handleSignIn}>
        <h4 className="sign-in__title" data-text="Sign In">
          Sign In
        </h4>
        <label className="sign-in__label">
          Username:
          <input
            className="sign-in__input"
            placeholder="Enter Username"
            name="username"
          />
        </label>
        <label className="sign-in__label">
          Password:
          <input
            type="password"
            className="sign-in__input"
            placeholder="Enter Password"
            name="password"
          />
        </label>
        <button className="button sign-in__submit">Submit</button>
      </form>
      <button
        className="sign-up"
        data-text="Sign Up"
        onClick={() => setIsSignIn(!isSignIn)}
      >
        Sign Up
      </button>
    </>
  ) : (
    <>
      <button
        className="sign-in"
        data-text="Sign In"
        onClick={() => setIsSignIn(!isSignIn)}
      >
        Sign In
      </button>
      <form className="sign-up" onSubmit={handleSignUp}>
        <h4 className="sign-up__title" data-text="Sign In">
          Sign Up
        </h4>
        <label className="sign-up__label">
          Username:
          <input
            className="sign-up__input"
            placeholder="Enter Username"
            name="username"
          />
        </label>
        <label className="sign-up__label">
          Password:
          <input
            type="password"
            className="sign-up__input"
            placeholder="Enter Password"
            name="password"
          />
        </label>
        <button className="button sign-up__submit">Submit</button>
      </form>
    </>
  );

  return (
    <div className={`login ${isLoginClicked ? "login--active" : ""} `}>
      <ul className="login__items">{user ? singedInElement : signInElement}</ul>
    </div>
  );
};

export default Login;
