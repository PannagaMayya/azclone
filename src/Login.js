import React, { useState } from "react";
import "./Login.css";
import Loading from "./Loading";
import ErrorIcon from "@mui/icons-material/Error";
import { Link, useNavigate } from "react-router-dom";
import { auth, signin } from "./appFirebase/firebase";
function Login() {
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [login, setLogin] = useState({ email: "", password: "" });
  const Signin = ({ email, password }) => {
    setErr(false);
    setIsLoading(true);
    signin(auth, email, password)
      .then((info) => {
        setIsLoading(true);
        setTimeout(() => {
          history("/");
        }, 4000);
        setIsLoading(false);
      })
      .catch((err) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        setLogin({ ...login, password: "" });
        setErr(true);
      });
  };
  return isLoading ? (
    <Loading />
  ) : (
    <div className="login">
      <Link to="/" className="login__logo">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt="amazonlogo"
        ></img>
      </Link>
      <div
        className="login_error"
        style={err ? { color: "red", display: "flex" } : { display: "none" }}
      >
        <ErrorIcon />
        Incorrect Login Details
      </div>
      <div className="login__container">
        <h1 style={{ fontWeight: 450 }}>Sign In</h1>
        <form
          className="login__form"
          onSubmit={(e) => {
            e.preventDefault();
            Signin(login);
          }}
        >
          <h5 style={{ fontWeight: 700 }}>Email</h5>
          <input
            type="email"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            required
          ></input>
          <h5 style={{ fontWeight: 700 }}>Password</h5>
          <input
            type="password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            required
          ></input>
          <button className="login__signin" type="submit">
            Sign In
          </button>
        </form>
        <p style={{ fontSize: "0.8em" }}>
          By continuing, you agree to Amecon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="login__new">
        <p style={{ fontSize: "14px", fontWeight: 350, margin: "2px" }}>
          New to Amazon?
        </p>
        <Link to="/register">
          <button className="login__signup">Create your Amazon account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
