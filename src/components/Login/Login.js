import "./Login.scss";

const Login = ({ isLoginClicked }) => {
  return (
    <div className={`login ${isLoginClicked ? "login--active" : ""} `}>
      <ul className="login__items">
        <form className="sign-in">
          <h4 className="sign-in__title" data-text="Sign In">
            Sign In
          </h4>
          <label className="sign-in__label">
            Username:
            <input className="sign-in__input" placeholder="Enter Username" />
          </label>
          <label className="sign-in__label">
            Password:
            <input className="sign-in__input" placeholder="Enter Password" />
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
